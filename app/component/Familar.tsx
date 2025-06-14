"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Familar() {
  return (
    <motion.div
      style={{ direction: "ltr" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
      className=" h-full  text-white w-full flex lg:flex-row flex-col gap-2 items-start "
    >

      <div className="w-full h-full">
        <p className="text-sm lg:text-2xl font-bold sm:text-2xl text-gray-400 tracking-widest uppercase mb-4">
          — Familars
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight break-words">
          Git,
          <br />
          ReactNative,
          <br />
          Docker
        </h1>
      </div>
      <motion.div  animate={{
            opacity: [0.8, 1, 0.8],
            filter: ["brightness(60%)", "brightness(65%)", "brightness(70%)"],
            x: [0, -5, 0],
          }}
          
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }} className="w-full justify-center align-middle items-center">
        <Image
          src="/BgCover.svg"
          alt="My Image"
          width={600}
          height={200}
          className="relative bottom-20 left-50   sm:left-120 lg:left-100"

        /></motion.div>
    </motion.div>
  );
}
