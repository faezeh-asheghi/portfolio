
"use client"
import { motion,  } from "framer-motion";
import Image from "next/image";
export default function AboutMe() {
  return (
    <motion.div 
    style={{direction:"ltr"}}
     initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
    className="min-h-full overflow-x-hidden text-white  w-full flex flex-col ">
      <div className="max-w-2xl">
        <p className="text-sm text-yellow-500 tracking-widest uppercase mb-4">
          — Hello World
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I am faeze, a <br />
          <span className="text-white">frontend developer</span> <br />
          based in <span className="text-white">Somewhere</span>.
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
         
        </div>
      </div>
     <div className="w-full rounded-sm flex justify-center bg-[#1b1b1b]  mt-10">
<div className="relative w-full sm:w-[400px] lg:w-[400px] h-[400px] ">
  <Image
    src="/Me.png"
    alt="My Image"
    fill
    className="object-cover"
  />
</div>

</div>


    </motion.div>
  );
}
