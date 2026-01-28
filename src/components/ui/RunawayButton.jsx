import { useState } from 'react';
import { motion } from 'framer-motion';

export const RunawayButton = ({ children, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Aumentamos el rango de movimiento (entre -250px y 250px)
    // para que el salto sea largo y salga de la zona del mouse
    const range = 300; 
    const randomX = Math.floor(Math.random() * range * 2) - range;
    const randomY = Math.floor(Math.random() * range * 2) - range;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      // FÍSICAS EXTREMAS:
      // mass: 0.1 (Súper ligero, acelera instantáneo)
      // stiffness: 800 (Resorte muy tenso, reacción explosiva)
      // damping: 10 (Poco freno)
      transition={{ type: "spring", stiffness: 800, damping: 10, mass: 0.1 }}
      
      // Usamos onMouseOver y onMouseEnter para asegurar que detecte cualquier intento
      onMouseEnter={moveButton}
      onMouseOver={moveButton}
      onMouseDown={moveButton} // Por si logran hacer click, se mueve antes de soltar
      
      className={`px-8 py-4 rounded-full font-bold text-lg transition-all transform cursor-not-allowed relative z-50 select-none ${className}`}
    >
      {children}
    </motion.button>
  );
};