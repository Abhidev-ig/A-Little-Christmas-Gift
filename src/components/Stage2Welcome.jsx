import React from 'react';
import { motion } from 'framer-motion';

const Stage2Welcome = ({ onNext }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="flex items-center justify-center h-full p-4"
        >
            {/* Removed the tape effect div that was here */}
            <div className="bg-grid-paper border-8 border-white aspect-square w-full max-w-sm rounded-lg shadow-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">

                <div className="z-10 relative w-full flex flex-col items-center">
                    <motion.img
                        src="/A-Little-Christmas-Gift/assets/snowman.png"
                        alt="Cute Snowman"
                        className="w-48 h-48 object-contain drop-shadow-md"
                        animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <h2 className="font-festive text-3xl mt-6 mb-2 text-christmas-green font-bold">This Christmas,</h2>
                    <p className="text-slate-600 mb-8 font-sans">something special for you.</p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onNext}
                        className="bg-christmas-red text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg border-2 border-christmas-gold/50"
                    >
                        Open it
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Stage2Welcome;
