import React, { useEffect, useState } from 'react';

const SnowBackground = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Increased count to 150 for continuous feeling
        const flakes = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            // Varies between 5s and 15s fall duration
            animationDuration: `${Math.random() * 10 + 5}s`,
            // Negative delay ensuring screen is full immediately
            animationDelay: `-${Math.random() * 10}s`,
            opacity: Math.random() * 0.7 + 0.3, // Brighter snow
            size: `${Math.random() * 6 + 2}px` // slightly smaller for realism
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake absolute rounded-full bg-white"
                    style={{
                        left: flake.left,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay,
                        opacity: flake.opacity,
                        width: flake.size,
                        height: flake.size,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowBackground;
