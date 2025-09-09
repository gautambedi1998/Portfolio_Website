"use client";
import HeroText from "../components/heroText";
import ParalaxBackground from "../components/paralaxBackground";

function Hero() {
  return (
    <section className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden sm:px-10 px-5 lg:px-15">
      <HeroText />
      <ParalaxBackground />
    </section>
  );
}

export default Hero;
