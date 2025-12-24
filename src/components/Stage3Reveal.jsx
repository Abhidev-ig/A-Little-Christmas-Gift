import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Stage3Reveal = ({ onComplete }) => {
    const [flipped, setFlipped] = useState([false, false, false, false, false]);
    const words = ["You", "are", "my", "cutest", "gift 🎁"];

    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);

        if (newFlipped.every(v => v)) {
            setTimeout(onComplete, 1500);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full p-4 w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10 z-10"
            >
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="text-christmas-red fill-christmas-red animate-pulse" size={24} />
                    <h2 className="font-festive text-3xl text-christmas-gold">Just for you</h2>
                    <Heart className="text-christmas-red fill-christmas-red animate-pulse" size={24} />
                </div>
                <p className="text-white/80 font-sans text-sm">Tap each card to reveal a secret</p>
            </motion.div>

            {/* Grid of Polaroid Cards */}
            <div className="flex flex-wrap justify-center gap-3 max-w-[90%] md:max-w-xl z-20">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className="relative w-24 h-32 md:w-28 md:h-36 perspective-1000 cursor-pointer group"
                        onClick={() => handleFlip(index)}
                    >
                        <motion.div
                            className="w-full h-full relative transform-style-3d transition-all duration-500"
                            animate={{ rotateY: flipped[index] ? 180 : 0 }}
                            whileHover={{ scale: 1.05, rotate: flipped[index] ? 180 : 5 }}
                        >
                            {/* Front of Card (Unrevealed) - Changed Logo to Heart */}
                            <div className="absolute inset-0 backface-hidden bg-christmas-red border-4 border-christmas-cream rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-christmas-gold to-transparent"></div>
                                <Heart className="text-christmas-gold fill-current" size={40} />
                            </div>

                            {/* Back of Card (Revealed) - Text is now Black */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border-4 border-christmas-gold rounded-xl shadow-xl flex items-center justify-center z-10">
                                <span className="font-bold text-lg md:text-xl text-black text-center px-1 font-serif select-none">
                                    {word}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stage3Reveal;
