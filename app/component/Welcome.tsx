"use client"
import { motion, useAnimation } from "framer-motion";
import groovyWalkAnimation from "./WelcomeAnomation.json";
import {useLottie} from "lottie-react";
import { useEffect } from "react";

export default function PortfolioCover() {



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
    <div className="h-[600px] !overflow-x-hidden !bg-[#292929] w-full flex flex-row font-sans text-white">
             <div className={'lg:absolute  absolute lg:bottom-300  lg:left-200 top-20 lg:top-0  left-45 right-0 z-1 lg:scale-70 md:scale-75 scale-130 '}>
        {View}
    </div>
      {/* Left side */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      
      className="w-fit flex flex-col justify-between !px-0 p-0 py-10 ">
        <h1 className="text-xl md:text-2xl font-bold">portfolio.</h1>
        <p className="font-bold text-sm md:text-base">FRONTEND DEVELOPER</p>
     
      </motion.div>

      {/* Right side */}
      <div className="w-4/5 border-l border-white flex items-end p-6 md:p-8">
    
        <motion.div
          className="border-t border-white pt-4 w-full"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        > 
          <p className="tracking-[0.4em] text-sm md:text-base leading-relaxed">
            <span className="whitespace-nowrap block">F A E Z E </span>
            <span className="whitespace-nowrap block">A S H E G H I</span>
          </p>
          <p className="mt-2 text-sm md:text-base">2023-2025</p>
        </motion.div>
      </div>
    </div>
  );
}
