import React from "react";
import { FlipWords } from "./flipWords";
import { motion } from "motion/react";

function HeroText() {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex sm:px-10 px-5 lg:px-15">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          {"Hi I'm Gautam"}
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer
            <br /> Dedicated to Crafting
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl p-0"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm Gautam
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl "
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-4xl font-black text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
