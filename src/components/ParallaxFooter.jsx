import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const ParallaxFooter = () => {
    const [mouseX, setMouseX] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position from -1 to 1
            const normalized = (e.clientX / window.innerWidth) * 2 - 1;
            setMouseX(normalized);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Create springs for smooth movement
    // Mountains move slow (opposite)
    const mtnX = -mouseX * 20;
    // Forest moves medium (opposite)
    const forestX = -mouseX * 60;
    // Santa flies across independent of mouse, but maybe slightly influenced?
    // Let's keep Santa flying consistently L to R

    return (
        <div className="fixed bottom-0 left-0 w-full h-[30vh] pointer-events-none z-0 overflow-hidden">
            {/* Layer 1: Back Mountains (Moves Slow) */}
            <motion.div
                className="absolute bottom-0 left-[-5%] w-[110%] h-full"
                animate={{ x: mtnX }}
                transition={{ type: "spring", damping: 100 }}
            >
                <img src="/A-Little-Christmas-Gift/assets/mountains.png" alt="Mountains" className="w-full h-full object-cover object-bottom opacity-60" />
            </motion.div>

            {/* Layer 2: Mid Forest (Moves Medium) */}
            <motion.div
                className="absolute bottom-[-20px] left-[-5%] w-[110%] h-[80%]"
                animate={{ x: forestX }}
                transition={{ type: "spring", damping: 50 }}
            >
                <img src="/A-Little-Christmas-Gift/assets/forest.png" alt="Forest" className="w-full h-full object-cover object-bottom" />
            </motion.div>

            {/* Layer 3: Santa (Flies Across) */}
            <motion.div
                className="absolute bottom-[40%] w-64"
                initial={{ x: "-100vw" }}
                animate={{ x: "100vw" }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <img src="/A-Little-Christmas-Gift/assets/santa_silhouette.png" alt="Santa" className="w-full drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
            </motion.div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-christmas-dark via-transparent to-transparent opacity-80"></div>
        </div>
    );
};

export default ParallaxFooter;
