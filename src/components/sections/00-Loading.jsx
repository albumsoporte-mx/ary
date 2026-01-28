import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Iniciando...");

  // Mensajes que cambian según el porcentaje
  useEffect(() => {
    if (progress < 30) setMessage("Recopilando momentos...");
    else if (progress < 60) setMessage("Afinando los detalles...");
    else if (progress < 90) setMessage("Preparando el corazón...");
    else setMessage("¡Listo!");
  }, [progress]);

  // Simulación de carga (0 a 100%)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Espera un poquito al llegar a 100
          return 100;
        }
        // Velocidad aleatoria para que parezca real
        const diff = Math.random() * 5; 
        return Math.min(oldProgress + diff, 100);
      });
    }, 300); // Se actualiza cada 100ms

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center"
    >
      {/* Corazón Latiendo */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8 relative"
      >
        <Heart size={64} fill="#F43F5E" className="text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]" />
        {/* Partículas saliendo del corazón */}
        <div className="absolute inset-0 bg-rose-500 blur-xl opacity-20 animate-pulse rounded-full" />
      </motion.div>

      {/* Barra de Progreso */}
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Porcentaje y Texto */}
      <div className="text-center space-y-2 h-10">
        <p className="text-rose-400 font-mono text-xl font-bold">
          {Math.floor(progress)}%
        </p>
        <motion.p 
          key={message} // Anima cuando cambia el texto
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-500 text-xs tracking-widest uppercase"
        >
          {message}
        </motion.p>
      </div>

    </motion.div>
  );
};

export default Loading;