"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffects";
import DiamondScene from "./RedSphereScene"
import islamic from "../app/assets/images/islamic.png";
import RedSphereScene from "./RedSphereScene";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {

  
  return (
    
    <div className="pb-20 pt-36">

      
      {/* --- SPOTLIGHT BACKGROUND EFFECTS --- */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
         <Spotlight
          className="-top-80 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
         <Spotlight
          className="-top-20 -left-10 md:-left-80 md:-top-30 h-screen"
          fill="white"
        />
      </div>

      

      {/* --- HERO BACKGROUND --- */}
<div
  className="h-screen w-full dark:bg-[#151a1b] bg-v 
  absolute top-0 left-0 flex items-center justify-center"
>

{/* <div className="flex justify-center  items-start mt-[8rem] h-screen">
<RedSphereScene />
</div> */}

  <div
    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1ca8bb]
    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
  />
</div>


      {/* --- HERO TEXT CONTENT --- */}
      <div className="flex justify-center relative my-10 z-10">
        
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

        <TextGenerateEffect
  words="Transforming Concepts into Seamless User Experiences"
  className="text-center text-[22px] md:text-5xl  text-[#dbfdff] lg:text-[50px]"
/>


        
          <p className="text-center md:tracking-wider -mb-4 text-sm md:text-lg lg:text-2xl">
             Hi! I&apos;m Muskan, a Software Developer based in Kuwait.

          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
            {/* Sparkles effect below the button */}
                      <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[200px] h-[100px] pointer-events-none z-0">
                        <SparklesCore
                          background="transparent"
                          minSize={0.4}
                          maxSize={1.2}
                          particleDensity={500}
                          className="w-full h-full"
                          particleColor="#A855F7" // purple
                        />
                        {/* Optional gradient mask for soft fade */}
                        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(200px_100px_at_center,white,transparent)]"></div>
                      </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
