"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "iconsax-react";


export default function ScrollButton() {
  const [nearBottom, setNearBottom] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const triggerPoint = document.body.offsetHeight * 0.8;
      setNearBottom(scrollPosition >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // نمایش دکمه با تأخیر 2 ثانیه
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scroll = () => {
    if (nearBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={scroll}
          className="fixed bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/30 text-white p-4 rounded-full shadow-2xl hover:bg-white/20 transition-all z-50"
        >
          {/* {nearBottom ? <ChevronUp size={24} /> : <ChevronDown size={24} />} */}
            {nearBottom ? <ArrowUp
 size="20"
 color="white"
/>: <ArrowDown
 size="20"
 color="white"
/>}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
