import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ClosingVows = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="min-h-[100vh] flex flex-col justify-center items-center p-6 bg-slate-950 relative overflow-hidden z-20">
      
      {/* --- FONDO ANIMADO VISIBLE --- */}
      {/* Hemos aumentado la opacidad y cambiado el modo de mezcla para que SE VEA el latido */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.6, 0.3] // Opacidad más alta para que se note
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600 rounded-full blur-[120px] pointer-events-none z-0"
      />
      
      {/* Una segunda capa para dar profundidad */}
      <div className="absolute inset-0 bg-slate-950/40 z-0" />

      {/* --- CONTENIDO --- */}
      <div className="max-w-4xl w-full relative z-10 text-center space-y-16 py-12">

        <motion.div style={{ y }} className="space-y-12">
          
          {/* TÍTULO */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-8"
          >
            Si aceptas...
          </motion.h3>

          {/* PARTE 1: TUS PROMESAS (Texto completo) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed space-y-6"
          >
            <p>
              <span className="text-rose-400 font-medium italic">Neta</span> que siempre tendrás tu lugar. 
              Siempre habrá apoyo de mi lado.
            </p>
            <p>
              Siempre vas a ser la <span className="font-bold text-white">única</span> para mí.
            </p>
            <p>
              Siempre te voy a cuidar y te voy a tratar bonito, <br/>
              <span className="text-slate-400 italic">como lo he estado haciendo.</span>
            </p>
          </motion.div>

          <div className="w-24 h-1 bg-rose-500/50 mx-auto rounded-full" />

          {/* PARTE 2: LO QUE SIENTES (Texto completo) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed space-y-6"
          >
            <p>
              Todo lo que está pasando con nosotros quiero que nunca se acabe. 
            </p>
            <p className="font-serif italic text-white/90">
              "No sabes lo feliz que me siento contigo, es como un sueño del que no quiero despertar."
            </p>
          </motion.div>

        </motion.div>


        {/* PARTE 3: EL CIERRE INTENSO */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
        >
          <div className="space-y-2">
            <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 tracking-tight uppercase">
              Me encantas.
            </p>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
              Me fascinas.
            </p>
          </div>
          <p className="text-xl md:text-2xl text-rose-200 mt-6 font-medium">
            Te has vuelto tan importante para mí.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ClosingVows;