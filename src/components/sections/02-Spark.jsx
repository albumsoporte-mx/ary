import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from '../ui/Particles';

const SparkSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efectos parallax suaves
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Fondo Aurora animado (definido en index.css) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-rose-950/40 to-slate-950 animate-aurora" />
      
      {/* Partículas vibrantes */}
      <Particles count={40} colors={['#FFD700', '#FF69B4', '#00FFFF']} />
      
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div style={{ y: yText, opacity }} className="space-y-16">
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-400 to-indigo-400 drop-shadow-2xl text-glow">
            Llegaste Tú
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:shadow-rose-500/20 shadow-2xl transition-all"
            >
              <span className="text-4xl block mb-4">⚡️</span>
              <p className="text-xl font-medium text-slate-200 leading-relaxed">
                "No fue planeado. No fue forzado. Simplemente sucedió."
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 mt-0 md:mt-12 hover:shadow-cyan-500/20 shadow-2xl transition-all"
            >
              <span className="text-4xl block mb-4">💎</span>
              <p className="text-xl font-medium text-slate-200 leading-relaxed">
                "Contigo todo se siente <span className="text-cyan-300 font-bold">real</span>. Las experiencias, las risas... momentos únicos que nunca había vivido."
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SparkSection;