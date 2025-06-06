'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  'rgba(29, 78, 216, 0.7)',    // آبی تیره
  'rgba(20, 184, 166, 0.7)',   // فیروزه‌ای تیره
  'rgba(158, 81, 224, 0.7)',   // بنفش تیره
  'rgba(220, 38, 38, 0.7)',    // قرمز تیره
  'rgba(132, 204, 22, 0.7)',   // سبز زیتونی تیره
];

type Bubble = {
  id: number;
  size: number;
  left: number;
  delay: number;
  color: string;
  direction: 'up' | 'down';
};

export default function WelcomeBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [show, setShow] = useState(true);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    setTargetY(window.innerHeight / 2 - 80);
  }, []);

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 80 }).map((_, i) => ({  // تعداد به 80 افزایش پیدا کرد
      id: i,
      size: Math.random() * 60 + 30,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 1.5, // تاخیر کمتر برای زودتر ظاهر شدن
      color: colors[Math.floor(Math.random() * colors.length)],
      direction: Math.random() > 0.5 ? 'up' : 'down',
    }));
    setBubbles(newBubbles);

    const timeout = setTimeout(() => setShow(false), 12000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        .container {
          position: fixed;
          top: 0; bottom: 0; left: 0; right: 0;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%);
          overflow: hidden;
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          user-select: none;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 2.5px solid;
          box-shadow:
            inset 0 4px 10px rgba(255 255 255 / 0.6),
            0 0 20px rgba(255 255 255 / 0.3);
          backdrop-filter: blur(12px);
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.15));
          mix-blend-mode: screen;
          transition: border-color 0.3s ease;
        }

        .welcome-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3.5rem;
          font-weight: 800;
          color: #222;
          text-shadow: 0 0 15px rgba(29, 78, 216, 0.7);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          pointer-events: none;
          user-select: none;
          z-index: 10;
          mix-blend-mode: normal;
        }
      `}</style>

      <AnimatePresence>
        {show && (
          <motion.div
            className="container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            {bubbles.map(({ id, size, left, delay, color, direction }) => {
              const animateProps =
                direction === 'up'
                  ? {
                      y: [
                        0,
                        -targetY + 100 + Math.random() * 20,
                        -targetY + 90 + Math.random() * 10,
                        -targetY + 100 + Math.random() * 20,
                      ],
                      opacity: [0, 1, 1, 1],
                    }
                  : {
                      y: [
                        0,
                        targetY - 100 - Math.random() * 20,
                        targetY - 90 - Math.random() * 10,
                        targetY - 100 - Math.random() * 20,
                      ],
                      opacity: [0, 1, 1, 1],
                    };

              return (
                <motion.div
                  key={id}
                  className="bubble"
                  style={{
                    width: size,
                    height: size,
                    left: `${left}%`,
                    borderColor: color,
                    background: 'rgba(255 255 255 / 0.15)',
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={animateProps}
                  transition={{
                    delay,
                    duration: 6 + Math.random() * 3,
                    ease: 'easeInOut',
                    times: [0, 0.6, 0.85, 1],
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'white',
                    boxShadow: '0 0 30px white',
                  }}
                />
              );
            })}

            <div style={{ direction: 'ltr' }} className="welcome-text">
              Welcome to My Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
