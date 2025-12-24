import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const Stage1Entry = ({ onStart }) => {
    const [showGiftText, setShowGiftText] = useState(true);

    // Auto-switch to "Tap me" after 2.5 seconds to ensure CTA is seen
    useEffect(() => {
        const timer = setTimeout(() => setShowGiftText(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        onStart();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="flex flex-col items-center justify-center h-full text-center p-4"
        >
            <div className="h-20 mb-8 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {showGiftText ? (
                        <motion.h1
                            key="text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="font-serif text-3xl md:text-5xl text-christmas-cream drop-shadow-lg"
                        >
                            For someone special
                        </motion.h1>
                    ) : (
                        <motion.div
                            key="bubble"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative bg-white text-christmas-red px-6 py-3 rounded-2xl shadow-xl z-20"
                        >
                            <span className="font-bold text-lg">Tap me!</span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div
                className="relative group cursor-pointer"
                onClick={handleClick}
                onMouseEnter={() => setShowGiftText(false)}
                onMouseLeave={() => setShowGiftText(true)}
            >
                {/* Gift Box - Gold & Red */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="bg-gradient-to-br from-christmas-red to-red-700 rounded-2xl p-8 shadow-[0_0_30px_rgba(253,251,247,0.3)] text-christmas-gold border-4 border-christmas-gold/20 relative"
                >
                    <Gift size={80} strokeWidth={1.5} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Stage1Entry;
