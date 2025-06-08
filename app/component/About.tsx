'use client';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import groovyWalkAnimation from "./Animation.json";
import {useLottie} from "lottie-react";
import { useEffect } from "react";
export default function About() {

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
    };

    const { View } = useLottie(options);


    return (


<div className="scroll-y-hidden flex flex-row justify-between w-full">
<Image className={"absolute top-0 right-0 z-0"} width={600} height={400}  src={"/about.png"} alt={"logo"} />
   
    <div className={'absolute lg:top-10  top-5 lg:right-0  right-0 z-1 lg:scale-120 md:scale-75 scale-85 '}>
        {View}
    </div>
<div className="block lg:left-0 lg:absolute lg:top-0 lg:px-10 lg:pt-15" style={{direction:"ltr"}}>
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xs  md:text-2xl text-[#FDC435]"
    >
       Front End Development
    </motion.p>
<motion.h1
style={{ wordSpacing: '0.1rem' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="lg:text-5xl text-justify text-xl md:text-5xl font-bold mb-4 lg:leading-15 md:leading-10"
>
  Hello, my name is  
  <br className="hidden lg:block" />
    Faeze Asheghi
</motion.h1>

  <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="lg:w-1/3 text-justify lg:text-2xl text-sm md:text-2xl font-medium mb-4 lg:leading-7 md:leading-7 text-[#828282]"
>
  Short text with details about you, what you do or your professional career. You can add more information on the about page.
</motion.h1>
<div className="flex flex-row mt-5 gap-2">
   <motion.button
      initial={{ scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      animate={controls}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px rgba(252, 180, 70, 0.8)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="px-7 py-3 rounded-2xl text-white font-semibold tracking-wide cursor-pointer select-none
                 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500
                 bg-[length:200%_200%]"
      style={{ backgroundPosition: "0% 50%" ,zIndex:20}}
    >
      Project
    </motion.button>
        <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="px-7 py-3 rounded-2xl bg-transparent  font-semibold tracking-wide cursor-pointer select-none border-1 shadow-sm"
    >
      Email
    </motion.button>
    

</div>
    
    </div>
</div>




    );
}
