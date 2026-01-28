import { motion } from 'framer-motion';

const Particles = ({ count = 20, colors = ['#fff'] }) => {
  // Creamos un array fijo para evitar re-renderizados innecesarios
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-[1px]"
          style={{
            backgroundColor: colors[i % colors.length],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 4}px`, // entre 4px y 14px
            height: `${Math.random() * 10 + 4}px`,
          }}
          animate={{
            y: [0, Math.random() * -200 - 100], // Suben
            x: [0, Math.random() * 100 - 50],   // Se mueven lateralmente
            opacity: [0, 0.8, 0],       // Aparecen y desaparecen
            scale: [0.5, 1.2, 0.5]      // Palpitan
          }}
          transition={{
            duration: Math.random() * 10 + 10, // Duración aleatoria entre 10s y 20s
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default Particles;