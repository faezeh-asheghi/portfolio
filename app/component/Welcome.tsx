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
    <div className="h-full sm:gap-5 gap-5  !bg-[#292929] w-full  flex flex-row font-sans text-white">
           
      {/* Left side */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      
      className="w-fit flex flex-col justify-between !px-0 p-0 py-10 ">
        <h1 className="text-2xl md:text-4xl font-bold">portfolio.</h1>
        <p className="font-bold mb-2 sm:mb-25 text-sm md:text-4xl ">FRONTEND DEVELOPER</p>
     
      </motion.div>

      {/* Right side */}
      {/* Right side */}
<div className=" border-l lg:w-screen  border-white flex flex-col items-end lg:p-0 p-5 md:p-20">
  <div className="  h-full scale-[1.7] relative left-10 md:scale-[1.4]  lg:scale-[1.5]">
    {View}
  </div>

  <motion.div
    className="border-t ml-0 border-white lg:relative bottom-12 lg:ml-10 lg:mt-0 mt-40 lg:w-[40%] lg:mr-auto text-left w-full"
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  > 
    <p className="tracking-[0.4em] lg:px-5 text-sm md:text-4xl  lg:mt-0 mt-2 leading-relaxed">
      <span className="whitespace-nowrap  block">F A E Z E </span>
      <span className="whitespace-nowrap block">A S H E G H I</span>
    </p>
    <p className="mt-2 lg:px-5  text-sm md:text-4xl">2023-2025</p>
  </motion.div>
</div>

    </div>
  );
}
