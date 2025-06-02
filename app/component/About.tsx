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

<>


<Image className={"absolute top-0 right-0 z-0"} width={720} height={659}  src={"/about.png"} alt={"logo"} />
    <div className={'absolute  top-4 right-4 z-1'}>
        {View}
    </div>

</>

    );
}
