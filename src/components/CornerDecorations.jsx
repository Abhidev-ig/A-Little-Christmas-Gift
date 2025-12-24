import React from 'react';

const CornerDecorations = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Top Left - Gold Holly */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-christmas-gold opacity-30">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" transform="scale(2)" />
                    {/* Abstract Gold Swirls */}
                    <circle cx="20" cy="20" r="2" />
                    <circle cx="35" cy="15" r="3" />
                    <circle cx="15" cy="35" r="3" />
                    <path d="M10,10 C30,10 40,30 40,50" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 text-christmas-gold opacity-30 rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" transform="scale(2)" />
                    <path d="M10,10 C30,10 40,30 40,50" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 text-christmas-gold opacity-30 -rotate-90">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" transform="scale(2)" />
                    <path d="M10,10 C30,10 40,30 40,50" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-christmas-gold opacity-30 rotate-180">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" transform="scale(2)" />
                    <path d="M10,10 C30,10 40,30 40,50" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* Frame Border */}
            <div className="absolute inset-4 border border-christmas-gold opacity-20 rounded-3xl pointer-events-none"></div>
            <div className="absolute inset-6 border border-christmas-gold opacity-10 rounded-2xl pointer-events-none"></div>
        </div>
    );
};

export default CornerDecorations;
