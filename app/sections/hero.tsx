"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import HeroText from "../components/heroText";
import ParalaxBackground from "../components/paralaxBackground";
import { Astronaut } from "../components/astronaut";
import { stat } from "fs";
import { del } from "framer-motion/client";
import Loader from "../components/loader";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden sm:px-10 px-5 lg:px-15"
    >
      <HeroText />
      <ParalaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.2}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      );
    });
  }
}

export default Hero;
