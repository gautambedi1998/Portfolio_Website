import React from "react";

interface projectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: {
    id: number;
    name: string;
    path: string;
  }[];
}
const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}: projectDetailsProps) => {
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
