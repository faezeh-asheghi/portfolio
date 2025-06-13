"use client";
import { motion } from "framer-motion";

export default function Experts() {
  return (
    <motion.div
      style={{ direction: "ltr" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
      className=" h-full  text-white w-full flex flex-col items-start "
    >

      <div className="w-full h-full">
        <p className="text-sm lg:text-2xl font-bold sm:text-2xl text-gray-400 tracking-widest uppercase mb-4">
          — Expertise
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight break-words">
          HTML, CSS, JS, React.js, Next.js, Tailwind, MUI, Redux & Redux Toolkit
        </h1>
      </div>
    </motion.div>
  );
}
