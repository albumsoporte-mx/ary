import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Variantes para la animación escalonada del texto (Stagger Effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Retraso entre cada bloque de texto
      delayChildren: 0.3,
    },
  },
};

// Variantes para cada línea de texto (Efecto de entrada de cine con blur)
const textVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" } 
  },
};

// Componente para generar estrellitas parpadeantes aleatorias
const MiniTwinkle = ({ count = 10 }) => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-yellow-200 rounded-full blur-[0.5px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const RealitySection = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center p-8 text-center bg-slate-950 relative overflow-hidden z-20">
      
      {/* --- FONDO ANIMADO (NEBULOSA VIVA) --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/30 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-rose-900/20 blur-[150px] rounded-full pointer-events-none" 
      />
      {/* ------------------------------------ */}


      <div className="max-w-4xl relative z-10">
        {/* Añadimos polvo de hadas alrededor del bloque de texto */}
        <MiniTwinkle count={20} />

        {/* Icono principal animado */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <Sparkles className="text-yellow-100 w-16 h-16 z-10 relative animate-pulse-slow" />
            {/* Halo brillante detrás del icono */}
            <div className="absolute inset-0 bg-yellow-200/40 blur-xl rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* --- CONTENEDOR DE TEXTO CON ANIMACIÓN ESCALONADA --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Bloque 1: La Realidad */}
          <motion.div variants={textVariants}>
            <h3 className="text-2xl md:text-4xl font-serif text-slate-300 leading-relaxed md:leading-loose">
              "Sé muy bien que no vivimos en un cuento de hadas, ni en una de esas películas donde todo es perfecto."
            </h3>
          </motion.div>

          {/* Bloque 2: La Propuesta (Con énfasis brillante) */}
          <motion.div variants={textVariants} className="relative">
            <p className="text-lg md:text-2xl text-indigo-100 font-light leading-relaxed max-w-3xl mx-auto">
              Entiendo que la vida real no tiene guiones. 
              Pero te propongo algo mejor: <br />
              
              {/* Texto con brillo pulsante */}
              <motion.span 
                animate={{ textShadow: ["0 0 10px rgba(253,224,71,0.3)", "0 0 25px rgba(253,224,71,0.6)", "0 0 10px rgba(253,224,71,0.3)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-yellow-200 font-serif italic text-3xl md:text-5xl block mt-6"
              >
                hagamos que nuestra realidad tenga su propia magia.
              </motion.span>
            </p>
          </motion.div>
          
          {/* Separador que se dibuja */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "circOut" }}
            className="h-[2px] w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" 
          />

          {/* Bloque 3: La Promesa Final */}
          <motion.div variants={textVariants}>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              No puedo prometerte una fantasía sin obstáculos, pero sí te prometo llenarte de <strong className="text-slate-200 font-medium">momentos únicos</strong>. 
              Quiero construir contigo algo sólido y sincero. Una historia que, aunque no sea de película, sea inmensamente mejor porque es...
              <br/>
              <motion.span 
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="text-rose-300 font-serif text-3xl block mt-4 font-bold"
              >
                nuestra.
              </motion.span>
            </p>
          </motion.div>

        </motion.div>
        {/* -------------------------------------------------- */}

      </div>
    </section>
  );
};

export default RealitySection;