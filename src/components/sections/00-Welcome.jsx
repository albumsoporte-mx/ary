import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '../ui/Button';

const Welcome = ({ onStart }) => {
  return (
    <motion.div
      // Animación de salida: se desvanece hacia arriba cuando le das click
      exit={{ opacity: 0, y: -50, transition: { duration: 1 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-center p-6"
    >
      {/* Fondo animado sutil exclusivo de la intro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-950/20 via-slate-950 to-slate-950" />
      
      <div className="relative z-10 space-y-8 max-w-lg">
        
        {/* Icono latiendo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Heart size={64} className="text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" fill="currentColor" />
        </motion.div>

        {/* Texto de bienvenida */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white tracking-wide"
          >
            Hola, Ary.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xl text-rose-200/80 font-light italic"
          >
            Tengo algo importante que decirte...
          </motion.p>
        </div>

        {/* Botón de inicio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="pt-8"
        >
          <Button 
            onClick={onStart}
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-10 py-4 text-lg backdrop-blur-md hover:border-rose-500/50 transition-all duration-500"
          >
            Ver Historia
          </Button>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Welcome;