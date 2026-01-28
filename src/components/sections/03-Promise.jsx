import { motion } from 'framer-motion';

const GlassCard = ({ title, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ margin: "-100px" }}
    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-rose-400/50 transition-colors duration-500"
  >
    <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
    <h3 className="text-2xl font-serif text-rose-200 mb-4">{title}</h3>
    <p className="text-lg text-slate-100 leading-relaxed relative z-10">
      {text}
    </p>
  </motion.div>
);

const PromiseSection = () => {
  const promises = [
    {
      title: "Cerrando Ciclos",
      text: "He sanado heridas y he dejado atrás lo que ya no me correspondía. Quiero empezar algo nuevo contigo, desde un lugar más libre, más honesto y más fuerte."
    },
    {
      title: "Te Elijo a Ti",
      text: "Elijo tu historia, tu esencia, tu forma de sentir y de existir. Estoy dispuesto a cuidarte, respetarte y darte tu lugar siempre."
    },
    {
      title: "Convicción",
      text: "Si hablan de ti, también hablan de mí. Porque caminar contigo es una decisión que tomo con total certeza."
    }
  ];

  return (
    <section className="min-h-screen py-24 px-4 flex flex-col items-center justify-center relative bg-slate-950">
      
      {/* Línea conectora visual */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-500/30 to-transparent -translate-x-1/2 hidden md:block" />
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
        {promises.map((item, index) => (
          <div key={index} className={`${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}>
             <GlassCard {...item} index={index} />
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center max-w-2xl mx-auto"
      >
        <p className="text-2xl font-serif italic text-rose-200/80">
          "Quiero avanzar contigo, con comunicación, lealtad y calma."
        </p>
      </motion.div>
    </section>
  );
};

export default PromiseSection;