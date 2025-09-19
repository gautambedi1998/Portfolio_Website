import React from "react";
import { Timeline } from "../components/timeline";
import { experiences } from "../constants";

const WorkExperience = () => {
  return (
    <div id="work" className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default WorkExperience;
