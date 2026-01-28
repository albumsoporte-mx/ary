import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Importa el nuevo componente
import Loading from './components/sections/00-Loading'; 

import Welcome from './components/sections/00-Welcome';
import PastSection from './components/sections/01-Past';
import SparkSection from './components/sections/02-Spark';
import PromiseSection from './components/sections/03-Promise';
import RealitySection from './components/sections/03b-Reality';
import ClosingVows from './components/sections/03c-ClosingVows';
import ProposalSection from './components/sections/04-Proposal';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  // CAMBIO: Iniciamos en 'loading'
  const [stage, setStage] = useState('loading');
  const [audio] = useState(new Audio('./cancion.mp3'));

  const handleStartStory = () => {
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play failed", e));
    setStage('content');
  };

  return (
    <div className="relative w-full">
      <CustomCursor />
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        
        {/* ETAPA 1: PANTALLA DE CARGA (LOADING) */}
        {stage === 'loading' && (
          <Loading key="loading" onComplete={() => setStage('welcome')} />
        )}

        {/* ETAPA 2: BIENVENIDA (Hola Ary...) */}
        {stage === 'welcome' && (
          <Welcome key="welcome" onStart={handleStartStory} />
        )}

        {/* ETAPA 3: LA HISTORIA */}
        {stage === 'content' && (
          <motion.main 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative z-10"
          >
            <PastSection />
            <SparkSection />
            <PromiseSection />
            <RealitySection />
            <ClosingVows />
            <ProposalSection />
            
            <footer className="py-8 text-center text-slate-800 text-xs bg-slate-950 relative z-10 opacity-50">
              <p>Hecho con todo mi corazón</p>
            </footer>
          </motion.main>
        )}
      
      </AnimatePresence>
    </div>
  );
}

export default App;