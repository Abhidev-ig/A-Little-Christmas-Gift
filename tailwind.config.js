/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                christmas: {
                    red: '#991b1b',    // Royal Red (Primary)
                    crimson: '#7f1d1d', // Darker Red for gradients
                    gold: '#facc15',   // Bright Gold (Accents)
                    antique: '#ca8a04', // Antique Gold (Borders)
                    cream: '#fff1f2',  // Soft White/Pinkish hue
                    green: '#14532d',  // Deep Green (Text contrast)
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Poppins"', 'sans-serif'],
                script: ['"Dancing Script"', 'cursive'],
                festive: ['"Mountains of Christmas"', 'cursive'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
}
