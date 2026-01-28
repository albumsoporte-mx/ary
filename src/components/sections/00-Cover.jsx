import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Cover = ({ onOpen }) => {
  return (
    <motion.div
      exit={{ scale: 10, opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-950 cursor-pointer"
      onClick={onOpen}
    >
      <div className="space-y-6 text-center">
        {/* El Sobre animado */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }} // Flota suavemente
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          <div className="w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl group-hover:border-rose-500/50 transition-colors duration-500">
            <Mail size={48} className="text-slate-400 group-hover:text-rose-400 transition-colors duration-500" />
          </div>
          
          {/* Un puntito rojo de notificación */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full border-4 border-slate-950 animate-bounce" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 font-mono text-sm tracking-widest uppercase"
        >
          Haz clic para abrir
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Cover;