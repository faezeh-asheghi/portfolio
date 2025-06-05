'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flowerEmojis = ["🌸", "🌼", "🌺", "🌻", "🌷"];

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [flowers, setFlowers] = useState<
    { id: number; left: string; emoji: string; rotation: number }[]
  >([]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 4000);

    const interval = setInterval(() => {
      setFlowers((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          left: Math.random() * 100 + "%",
          emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
          rotation: Math.random() * 360,
        },
      ]);
    }, 150); // گل‌ها سریع‌تر و بیشتر بریزند

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[999] bg-[#F9FAFF]/90 backdrop-blur-lg overflow-hidden flex items-center justify-center"
        >
          {/* گل‌های متحرک */}
          {flowers.map((flower) => (
            <motion.div
              key={flower.id}
              initial={{
                y: -40,
                opacity: 1,
                rotate: flower.rotation,
                scale: 1,
              }}
              animate={{
                y: "110vh",
                opacity: 0,
                rotate: flower.rotation + 180,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute text-2xl md:text-4xl drop-shadow-lg"
              style={{
                left: flower.left,
                top: 0,
                filter: "drop-shadow(0 0 5px rgba(255, 193, 7, 0.6))",
              }}
            >
              {flower.emoji}
            </motion.div>
          ))}

          {/* متن یا لوگو وسط */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="bg-white/60 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-xl "
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#FDC435] tracking-tight">
              Welcome!
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
