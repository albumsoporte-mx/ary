import { motion } from 'framer-motion';
import { Quote, MicOff } from 'lucide-react';

const PersonalNote = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 bg-slate-950 relative overflow-hidden z-20">
      
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black z-0" />
      
      <div className="max-w-3xl w-full relative z-10 space-y-12 my-20">
        
        {/* Icono de comillas para indicar que es una cita tuya */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center text-rose-500/50"
        >
          <Quote size={48} />
        </motion.div>

        {/* --- EL TEXTO PERSONAL --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed text-justify md:text-center"
        >
          <p>
            Como dice <strong className="text-white">Bad Bunny</strong>: "Me gusta estar enamorado", pero lo que no me gusta es que cuando me enamoro me siento vulnerable, porque para mí es <span className="italic text-rose-300">dar todo o nada</span>.
          </p>

          <p>
            De mi parte, nunca te he dado una imagen falsa de mí. Siempre he creído que, por como soy, puedo llegar a aburrir; pero a mí me gusta ser yo, y mi forma de ser es justo como últimamente te trato. De hecho, creo que contigo me paso de consentirte... <span className="text-white font-medium">a nadie he consentido así como lo hago contigo.</span>
          </p>

          <div className="w-1/3 h-px bg-white/10 mx-auto my-6" />

          <p>
            Una vez le dije a una amiga: "¿Por qué yo? Si soy chido, hago las cosas bien y pongo en práctica los valores de casa, ¿por qué siempre me hacen sentir mal?". Solo pensaba que el amor no existía... pero llegó <strong className="text-rose-400">Doña Dormilona</strong>, toda hermosa, y cambió mi chip por completo.
          </p>

          <p>
            He descubierto muchas cosas nuevas contigo que me hacen sentir más libre. Me encanta grabar contenido para tus redes contigo, porque siempre quise hacerlo y nunca me animé... hasta ahorita. <span className="italic text-yellow-100">Tú me impulsas y me ayudas a sentirme seguro.</span>
          </p>
          
          <p className="text-right text-slate-500 italic text-base mt-4">
            "Lo demás debo decírtelo en persona..."
          </p>
        </motion.div>

        {/* --- ALERTA DE AUDÍFONOS --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 border-2 border-rose-500/50 rounded-2xl p-6 bg-rose-950/20 backdrop-blur-sm flex flex-col items-center gap-4 text-center"
        >
          <div className="bg-rose-500/20 p-4 rounded-full animate-pulse">
            <MicOff size={32} className="text-rose-400" />
          </div>
          <h4 className="text-2xl font-bold text-white uppercase tracking-widest">
            Espera, aún no bajes
          </h4>
          <p className="text-rose-200 text-lg font-medium">
            (Por favor, quítate los audífonos un momento)
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PersonalNote;