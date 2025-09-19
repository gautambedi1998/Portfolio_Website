"use client";

import React, { useState } from "react";
import { myProjects } from "../constants";
import Project from "../components/project";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX + 10);
    y.set(e.clientY + 10);
  };
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative sm:px-10 px-5 lg:px-15 min-h-80 mt-20 md:mt-30"
      onMouseMove={handleMouseMove}
    >
      <h2 className="font-bold text-3xl md:text-4xl">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          tags={project.tags}
          description={project.description}
          subDescription={project.subDescription}
          href={project.href}
          image={project.image}
          setPreview={setPreview}
        />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-40 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
