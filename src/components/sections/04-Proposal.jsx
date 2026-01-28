import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import { RunawayButton } from '../ui/RunawayButton';

// --- TUS FOTOS REALES ---
const photos = [
  { src: './image1.JPG', alt: 'Momento 1', position: 'top-[2%] -left-[5%] md:top-[5%] md:-left-[2%] -rotate-12', delay: 0.1 },
  { src: './image2.PNG', alt: 'Momento 2', position: 'top-[5%] -right-[5%] md:top-[8%] md:-right-[2%] rotate-12', delay: 0.3 },
  { src: './image3.JPG', alt: 'Momento 3', position: 'bottom-[5%] -left-[2%] md:bottom-[10%] md:left-[2%] rotate-6', delay: 0.5 },
  { src: './IMG_8936.jpg', alt: 'Momento 4', position: 'bottom-[2%] -right-[2%] md:bottom-[5%] md:right-[2%] -rotate-12', delay: 0.7 },
];

const FloatingPhoto = ({ src, alt, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", bounce: 0.4, duration: 1, delay }}
    viewport={{ once: true }}
    className={`absolute w-40 h-52 md:w-64 md:h-80 p-2 rounded-xl bg-white shadow-xl transform transition-all duration-500 ${className} pointer-events-none z-10 opacity-60`}
  >
    <div className="w-full h-full overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
    </div>
  </motion.div>
);

const CelebrationPhoto = ({ src, rotate, delay, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: 50, rotate: 0 }}
    animate={{ opacity: 1, scale: 1, y: 0, rotate: rotate }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay }}
    whileHover={{ scale: 1.1, zIndex: 50, rotate: 0, transition: { duration: 0.2 } }}
    className="relative bg-white p-3 md:p-4 rounded-xl shadow-2xl transform border-4 border-white"
    style={{ zIndex: index }}
  >
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm" />
    <div className="w-32 h-40 md:w-48 md:h-60 overflow-hidden rounded-lg bg-slate-100">
      <img src={src} alt="Celebración" className="w-full h-full object-cover" />
    </div>
  </motion.div>
);

const ProposalSection = () => {
  const [accepted, setAccepted] = useState(false);
  const containerRef = useRef(null);

  const handleAccept = () => {
    setAccepted(true);
    
    // --- AQUÍ ESTÁ LA CONFIGURACIÓN DE LOS CORAZONES ---
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const launchFirework = () => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;
      
      const particleCount = randomInRange(40, 80);
      
      confetti({
        particleCount,
        startVelocity: randomInRange(30, 55),
        spread: 360,
        ticks: 120,
        gravity: 1.2,
        decay: 0.94,
        zIndex: 100,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        // COLORES ROMÁNTICOS: Rojo, Rosa Fuerte, Rosa Claro, Blanco
        colors: ['#FF0000', '#F43F5E', '#FFB6C1', '#FFFFFF'],
        // FORMA: ¡SOLO CORAZONES!
        shapes: ['heart'],
        // TAMAÑO: Los hacemos grandes (scalar 2) para que se note la forma
        scalar: 2 
      });

      if (Date.now() < animationEnd) {
          setTimeout(launchFirework, randomInRange(200, 600));
      }
    };
    launchFirework();
    setTimeout(launchFirework, 100);
  };

  return (
    <section ref={containerRef} className="min-h-[150vh] flex flex-col justify-center items-center p-4 text-center bg-slate-950 relative overflow-hidden perspective-1000 py-32">
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-rose-950/30 to-slate-950 animate-aurora -z-20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/50 to-slate-950 -z-10" />

      {!accepted && (
        <>
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 mx-auto overflow-hidden">
            {photos.map((photo, index) => (
              <FloatingPhoto key={index} {...photo} className={photo.position} delay={photo.delay} />
            ))}
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.5, duration: 0.5 }}
            className="relative z-30 space-y-12 bg-black/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/10 max-w-4xl shadow-[0_0_50px_rgba(0,0,0,0.5)] mx-4"
          >
            <div className="space-y-8">
               <p className="text-2xl text-rose-200/90 font-serif italic">Y ahora sí, con todo esto en mente...</p>
               <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight font-serif drop-shadow-lg">
                ¿Te gustaría ser mi novia...
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 block mt-6 text-4xl md:text-6xl pb-2">
                  y seguir escribiendo esta historia conmigo?
                </span>
              </h2>
            </div>
            
            <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-6 relative">
              <Button 
                onClick={handleAccept} 
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-xl shadow-rose-500/30 text-2xl md:text-3xl px-16 py-8 rounded-full border-4 border-white/10 z-10 order-2 md:order-1"
              >
                Sí, acepto
              </Button>
              <div className="relative h-20 w-full md:w-auto flex justify-center order-1 md:order-2">
                 <RunawayButton className="bg-slate-700 text-slate-300 border-2 border-slate-600 hover:bg-slate-600 text-xl px-10 py-6">
                   No, gracias
                 </RunawayButton>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {accepted && (
        <div className="relative z-40 w-full max-w-5xl flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 space-y-4"
          >
            <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-300 to-rose-600 filter drop-shadow-lg">
              ¡GRACIAS POR DECIR QUE SÍ!
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 font-light tracking-widest uppercase">
              Juntos comenzamos esta historia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-center p-4">
            {photos.map((photo, index) => {
              const rotations = [-6, 6, -3, 3]; 
              return (
                <CelebrationPhoto 
                  key={index} 
                  src={photo.src} 
                  rotate={rotations[index]} 
                  delay={0.2 + (index * 0.1)} 
                  index={index}
                />
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 bg-white/10 backdrop-blur-md px-10 py-6 rounded-full border border-white/20"
          >
            <p className="text-lg md:text-2xl text-rose-200 font-serif italic">
              "Te quiero muchísimo, Ary."
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProposalSection;