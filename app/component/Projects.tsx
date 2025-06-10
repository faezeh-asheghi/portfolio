'use client';

import Image from "next/image";
import {motion} from "framer-motion";

export default function Projects() {


    return (
       <div className={"flex flex-col gap-10"}>
           <motion.h1 className="text-3xl md:text-5xl font-bold text-left ml-35 lg:text-left">
           projects
           </motion.h1>
           <Image  style={{minWidth:"600px",minHeight:"500px"}} width={900}  height={400}  src={"/sarmayeh3.png"} alt={"logo"}/>


       </div>
    );
}
