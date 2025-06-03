'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import groovyWalkAnimation from "./Animation.json";
import {useLottie} from "lottie-react";

export default function About() {

    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
    };

    const { View } = useLottie(options);


    return (


<div>
<Image className={"absolute top-0 right-0 z-0"} width={600} height={400}  src={"/about.png"} alt={"logo"} />
    <div className={'absolute lg:top-10 md:top-10  top-5 lg:right-0 md:right-0 right-0 z-1 lg:scale-120 md:scale-75 scale-85 '}>
        {View}
    </div>
<div className={"lg:absolute lg:top-10 lg:left-2 flex flex-col gap-4 w-full justify-end align-middle items-center"}>
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-xs  md:text-2xl text-[#FDC435]"
    >
       Front End Development
    </motion.p>
    <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-4xl text-xl md:text-4xl  font-bold mb-4"
    >
        Hello,  my name is Faeze Asheghi
    </motion.h1></div>
</div>




    );
}
