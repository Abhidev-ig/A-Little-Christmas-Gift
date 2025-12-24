import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SnowBackground from './components/SnowBackground';
import CursorSparkle from './components/CursorSparkle';
import CornerDecorations from './components/CornerDecorations'; // New Component
import Stage1Entry from './components/Stage1Entry';
import Stage2Welcome from './components/Stage2Welcome';
import Stage3Reveal from './components/Stage3Reveal';
import Stage4Letter from './components/Stage4Letter';

function App() {
  const [stage, setStage] = useState(0);
  const audioRef = useRef(null);

  // Initialize audio on first user interaction
  const handleStart = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }

    audioRef.current.play().catch(e => console.log("Audio play failed", e));
    setStage(1);
  };

  const handleEnd = () => {
    setStage(5);
    if (audioRef.current) {
      const fadeOut = setInterval(() => {
        if (audioRef.current.volume > 0.05) {
          audioRef.current.volume -= 0.05;
        } else {
          audioRef.current.pause();
          clearInterval(fadeOut);
        }
      }, 200);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans text-christmas-cream selection:bg-christmas-gold selection:text-christmas-red">
      {/* Global Effects */}
      <SnowBackground />
      <CursorSparkle />
      <CornerDecorations />

      {/* Background Santa Animation - Non-intrusive (Top Sky) */}


      <div className="relative z-10 w-full h-full max-w-md mx-auto flex items-center justify-center p-4">

        {/* Main Content Area - Glassmorphism Container with Gold Border */}
        <motion.div
          layout
          className="w-full glass-card rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-christmas-gold/40"
          style={{ maxHeight: '85vh', height: 'auto', minHeight: '500px' }}
        >
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <Stage1Entry key="stage1" onStart={handleStart} />
            )}

            {stage === 1 && (
              <Stage2Welcome key="stage2" onNext={() => setStage(2)} />
            )}

            {stage === 2 && (
              <Stage3Reveal key="stage3" onComplete={() => setStage(3)} />
            )}

            {stage === 3 && (
              <Stage4Letter key="stage4" onEnd={handleEnd} />
            )}

            {stage === 5 && (
              <motion.div
                key="end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-[500px] text-center p-8"
              >
                <h1 className="font-festive text-6xl text-christmas-gold mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Happy Holidays</h1>
                <p className="text-lg opacity-80 font-sans">May your days be merry & bright.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
