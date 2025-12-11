import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Hi, I'm <span className="text-primary">Abdur Rahman</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8 font-medium">
                            Researcher in Machine Learning, Deep Learning & NLP
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="prose prose-lg dark:prose-invert text-muted-foreground mb-10"
                    >
                        <p>
                            Motivated researcher with a strong academic record and hands-on experience in building data-driven solutions.
                            Passionate about applying AI to healthcare and solving real-world problems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-input text-base font-medium rounded-md text-foreground bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
                <div className="hidden lg:block relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <div className="relative w-80 h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <img
                                src="/profile-pic.png"
                                alt="Abdur Rahman"
                                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="400" cy="400" r="400" fill="url(#paint0_radial_hero)" />
                    <defs>
                        <radialGradient id="paint0_radial_hero" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
                            <stop stopColor="currentColor" className="text-primary" />
                            <stop offset="1" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};
