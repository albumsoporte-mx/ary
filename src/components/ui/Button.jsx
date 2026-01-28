import { motion } from 'framer-motion';

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );
};