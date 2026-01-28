import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';

const CustomCursor = () => {
  // Usamos motion values en lugar de state para un rendimiento óptimo (evita re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuración del "muelle" (spring) para que el seguimiento sea suave y orgánico
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Función que actualiza la posición
    const moveCursor = (e) => {
      // Restamos la mitad del tamaño del cursor para centrarlo en la punta del mouse
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    // Limpieza
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* El cursor principal.
        Pointer-events: none es CRUCIAL para que el cursor falso no bloquee los clicks.
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        {/* Contenedor que cambia de tamaño al hacer hover */}
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Halo de luz brillante */}
          <div className="absolute w-8 h-8 bg-rose-500 rounded-full blur-md opacity-50 animate-pulse" />
          {/* El icono del corazón */}
          <Heart 
            size={24} 
            // Relleno rosa si hace hover, solo borde si no
            fill={isHovering ? "#F43F5E" : "transparent"} 
            className="text-rose-400 relative z-10 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" 
            strokeWidth={2.5}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;