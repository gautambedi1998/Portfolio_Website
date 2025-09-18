"use client";

import React from "react";
import { myProjects } from "../constants";
import Project from "../components/project";

const Projects = () => {
  return (
    <section className="relative sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30">
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
        />
      ))}
    </section>
  );
};

export default Projects;
