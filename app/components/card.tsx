"use client";

import React, { CSSProperties } from "react";
import { motion } from "motion/react";

interface cardProps {
  text?: string;
  style: CSSProperties;
  image?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const Card = ({ text, style, image, containerRef }: cardProps) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef?.current ? containerRef : undefined}
      dragElastic={1}
    />
  ) : (
    <motion.div
      style={style}
      className="absolute px-1 py-1 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef?.current ? containerRef : undefined}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
