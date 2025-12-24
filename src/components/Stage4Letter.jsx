import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Stage4Letter = ({ onEnd }) => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="h-full w-full relative overflow-hidden flex flex-col items-center justify-center">
            <motion.div
                className="text-center z-10 cursor-pointer p-8 relative"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    y: isOpen ? -50 : 0,
                    scale: isOpen ? 0.9 : 1
                }}
                transition={{ duration: 0.5 }}
            >
                {/* Floating Santa Animation */}
                <motion.img
                    src="/A-Little-Christmas-Gift/assets/santa.png"
                    alt="Cute Santa Sleigh"
                    className="w-64 h-auto mx-auto drop-shadow-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="mt-8">
                    <h2 className="font-festive text-4xl font-bold text-christmas-red drop-shadow-sm">Merry Christmas</h2>
                    <h3 className="font-script text-4xl text-christmas-gold mt-2">to my Cutiepie</h3>
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-sm font-sans text-christmas-cream/80 mt-6"
                    >
                        Tap to read
                    </motion.p>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="absolute bottom-0 left-0 right-0 h-[85%] z-20 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-[3rem]"
                    >
                        {/* Winter Card Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img src="/A-Little-Christmas-Gift/assets/winter_bg.png" alt="Winter Background" className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div> {/* Overlay for readability */}
                        </div>

                        {/* Content Scroll Area */}
                        <div
                            className="relative z-10 h-full overflow-y-auto px-8 py-10"
                            onScroll={(e) => {
                                const { scrollTop, scrollHeight, clientHeight } = e.target;
                                // Check if user has scrolled to the bottom (with a 10px buffer)
                                if (scrollHeight - scrollTop <= clientHeight + 10) {
                                    if (onEnd) onEnd();
                                }
                            }}
                        >
                            <div className="w-12 h-1.5 bg-slate-400/50 rounded-full mx-auto mb-8 sticky top-0" />

                            <div className="max-w-md mx-auto space-y-6 text-slate-800 font-medium">
                                {/* Letter Header */}
                                <div className="text-center mb-8">
                                    <span className="font-festive text-4xl text-christmas-green drop-shadow-sm">My Dearest,</span>
                                </div>

                                {/* User's Specific Poem/Text - Styled for readability */}
                                <div className="space-y-6 text-center md:text-left">
                                    <p className="font-sans text-lg leading-relaxed">
                                        This Christmas I just want you to know how special you are to me.
                                    </p>

                                    <p className="font-sans text-lg leading-relaxed">
                                        You are not just a part of my life,<br />
                                        you are the reason behind so many smiles and little moments.
                                    </p>

                                    <p className="font-sans text-lg leading-relaxed">
                                        I may not be perfect, but I promise one thing: whenever you share a wish, a dream, or even a silly thought,<br />
                                        I'll always try my best to be there for you.
                                    </p>

                                    <p className="font-sans text-lg leading-relaxed">
                                        Thank you for being you.
                                    </p>
                                </div>

                                <div className="text-center mt-12 space-y-2 pb-20">
                                    <p className="font-festive text-5xl text-christmas-red drop-shadow-sm">Merry Christmas</p>
                                    <p className="text-5xl">❤️🎄</p>
                                </div>
                            </div>

                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-800 transition-colors"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Stage4Letter;
