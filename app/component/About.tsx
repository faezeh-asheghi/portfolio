'use client';

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

<div className="flex lg:flex-row md:flex-row flex-col gap-10 absolute top-0 right-0 z-0 bg-red w-full">

<div>
<Image className={"absolute top-0 right-0 z-0"} width={600} height={400}  src={"/about.png"} alt={"logo"} />
    <div className={'absolute  top-10  z-1 lg:scale-85 md:scale-75 scale-55 '}>
        {View}
    </div></div>
    <div className="flex flex-col  absolute left-0 px-[120px] py-[110px]">
        <p className="text-xs font-extralight text-[#FDC435]">Frontend Developer</p>

    </div>

</div>

    );
}
