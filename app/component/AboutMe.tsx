
"use client"
import { motion,  } from "framer-motion";
export default function AboutMe() {
  return (
    <motion.div 
     initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
    className="min-h-full overflow-x-hidden text-white flex flex-col ">
      <div className="max-w-2xl">
        <p className="text-sm text-yellow-500 tracking-widest uppercase mb-4">
          — Hello World
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I am faeze, a <br />
          <span className="text-white"> Master of Science in Medical Biotechnology</span> & <br />
          <span className="text-white">frontend developer</span> <br />
          based in <span className="text-white">Somewhere</span>.
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
         
        </div>
      </div>
    </motion.div>
  );
}
