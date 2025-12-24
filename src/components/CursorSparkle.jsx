import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorSparkle = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add new sparkle
            const newSparkle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 4 + 2,
                rotation: Math.random() * 360
            };

            setSparkles(prev => [...prev.slice(-15), newSparkle]); // Keep last 15
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cleanup old sparkles
    useEffect(() => {
        const interval = setInterval(() => {
            setSparkles(prev => prev.filter(s => Date.now() - s.id < 600));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {/* Main Cursor Glow */}
            <motion.div
                className="fixed w-8 h-8 bg-christmas-teal/30 rounded-full blur-md"
                animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Sparkle Trail */}
            {sparkles.map(sparkle => (
                <motion.div
                    key={sparkle.id}
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ opacity: 0, scale: 1, y: sparkle.y + 20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bg-christmas-gold rounded-full"
                    style={{
                        left: sparkle.x,
                        top: sparkle.y,
                        width: sparkle.size,
                        height: sparkle.size,
                        boxShadow: '0 0 5px gold'
                    }}
                />
            ))}
        </div>
    );
};

export default CursorSparkle;
