import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground: React.FC = () => {
    return (
        <div className="hero-background-container">
            {/* Base Background Image with Slow Zoom/Pan */}
            <motion.div
                initial={{ scale: 1.0, opacity: 1 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{
                    scale: { duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" },
                }}
                className="hero-bg-image"
                style={{
                    backgroundImage: `url(/images/hero-bg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Subtle Animated Vector Mesh Lines (Teal/Navy) */}
            <svg className="hero-svg-overlay" xmlns="http://www.w3.org/2000/svg">
                {/* Gentle Wave 1 - Teal */}
                <motion.path
                    d="M-100,200 Q400,0 900,300 T1900,200"
                    fill="none"
                    stroke="#38B2AC" // Brand Teal
                    strokeWidth="1.5"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 4,
                        ease: "easeOut"
                    }}
                />

                {/* Floating Flow Line - Animated */}
                <motion.path
                    d="M-100,200 Q400,0 900,300 T1900,200"
                    fill="none"
                    stroke="#38B2AC"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    strokeDasharray="10 20"
                    animate={{
                        strokeDashoffset: [0, -100]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Gentle Wave 2 - Navy (Deeper) */}
                <motion.path
                    d="M-100,600 Q500,400 1000,700 T2000,600"
                    fill="none"
                    stroke="#1A365D" // Brand Navy
                    strokeWidth="1"
                    strokeOpacity="0.15"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Decorative floating circles for "Tech" feel */}
                <motion.circle
                    cx="15%" cy="25%" r="2"
                    fill="#38B2AC"
                    fillOpacity="0.4"
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="85%" cy="15%" r="3"
                    fill="#1A365D"
                    fillOpacity="0.2"
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </svg>

            {/* Overlay Gradient for fade effect */}
            <div className="hero-overlay-gradient" />
        </div>
    );
};

export default HeroBackground;
