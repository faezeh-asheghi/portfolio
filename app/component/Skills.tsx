'use client';
import { motion } from "framer-motion";
import { Html3 } from "iconsax-react";
import { useState, useEffect } from "react";

export default function Skills() {
    const [iconSize, setIconSize] = useState(40);


    useEffect(() => {
        function updateSize() {
            const width = window.innerWidth;
            if (width < 640) {
                setIconSize(30);
            } else if (width < 1024) {
            } else {
            }
        }

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const skills = [
        { name: "HTML", icon: <Html3 size={iconSize} color="#000" /> },
        { name: "CSS", icon: <Html3 size={iconSize} color="#000" /> },
        { name: "React", icon: <Html3 size={iconSize} color="#000" /> },
        { name: "Next.js", icon: <Html3 size={iconSize} color="#000" /> }
    ];

    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-10 w-full items-start">
            <div className="lg:w-1/2"></div>

            <div className="flex flex-col lg:items-end items-center gap-8 w-full">
                <motion.h1
                    style={{ wordSpacing: '0.1rem' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold text-center lg:text-left"
                >
                    Skills
                </motion.h1>

                <div
                    style={{
                        backgroundImage: 'url(/BgTemplate.svg)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                    className="flex justify-center lg:justify-end gap-6 flex-wrap h-[300px] lg:w-4/6 md:w-1/2 w-full"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center gap-2 mt-20 relative top-15 lg:left-20 md:left-15"
                        >
                            <div className="bg-white shadow-lg rounded-full flex items-center justify-center"
                                 style={{
                                     width: iconSize + 20,
                                     height: iconSize + 20,
                                 }}
                            >
                                {skill.icon}
                            </div>
                            <p className="text-sm font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
