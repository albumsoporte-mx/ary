import { motion } from 'framer-motion';

const Mask = ({ onClick }) => {
  return (
    <motion.div
      // Al salir, se desvanece suavemente (fade out)
      exit={{ opacity: 0, transition: { duration: 1 } }}
      // Estilos: Pantalla completa, negro absoluto, cursor de "mano"
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <motion.p
        // Animación de parpadeo suave para el texto
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-white/50 font-mono text-sm tracking-[0.2em] uppercase"
      >
        [ Haz clic para comenzar ]
      </motion.p>
    </motion.div>
  );
};

export default Mask;