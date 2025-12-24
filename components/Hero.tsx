import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { name } from "@/constants";

const Hero = () => (
  <section className="pt-36 pb-20">
    {/**
     *  UI: Spotlights
     *  Link: https://ui.aceternity.com/components/spotlight
     */}
    <div className="absolute top-0 left-0 h-screen w-screen overflow-x-hidden">
      <Spotlight
        className="absolute -top-40 -left-10 h-screen md:-top-20 md:-left-32"
        fill="white"
      />
      <Spotlight className="absolute top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="absolute top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
    </div>

    {/**
     *  UI: grid
     *  change bg color to bg-black-100 and reduce grid color from
     *  0.2 to 0.03
     */}
    <div className="absolute inset-0 bg-transparent! bg-[linear-gradient(to_right,#fff_3.5px,transparent_3.5px),linear-gradient(to_bottom,#fff_3.5px,transparent_3.5px)] bg-size-[100px_100px] opacity-3 blur-[0.5px]" />
    {/* Radial gradient for the container to give a faded look */}
    <div className="bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    <div className="relative z-10 mx-10 my-20 flex justify-center">
      <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
        <p className="max-w-80 text-center text-xs tracking-widest text-blue-100 uppercase">
          Dynamic Web Magic with Next.js
        </p>

        {/**
         *  Link: https://ui.aceternity.com/components/text-generate-effect
         *
         *  change md:text-6xl, add more responsive code
         */}
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="last:text-purple nth-last-[2]:text-purple text-center text-[40px] font-bold md:text-5xl lg:text-6xl"
        />

        <p className="my-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
          Hi! I&apos;m {name.split(" ")[0]}, a Next.js Developer based in Croatia.
        </p>

        <a href="#about">
          <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
