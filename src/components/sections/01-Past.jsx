import { motion } from 'framer-motion';
import Particles from '../ui/Particles';

const PastSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 text-center relative z-10 bg-slate-950">
      <Particles count={15} colors={['#475569', '#64748b']} />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-slate-300 font-serif text-xl md:text-2xl leading-relaxed space-y-8 z-10"
      >
        <p>
          Antes de conocerte, ya había aceptado la idea de que quizá el amor no era algo que me iba a pasar.
          Me enfoqué en mí, en crecer, en sanar, en aprender a estar bien solo.
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-light italic text-slate-500 text-lg"
        >
          (Caminaba tranquilo, pero sin saber lo que me faltaba...)
        </motion.p>
      </motion.div>
      
      {/* Indicador de scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-slate-600"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default PastSection;