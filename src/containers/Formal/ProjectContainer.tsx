import { Project1, Project2, Project3, Project4 } from "@/assects/assects";
import { ProjectCard } from "@/components/components";
import React from "react";

type Props = {};

const ProjectContainer = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-16">
      <ProjectCard
        bgColor="bg-purple-600"
        logo={Project1}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
        btnText="Button Text"
      />
      <ProjectCard
        bgColor="bg-orange-600"
        logo={Project2}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
        btnText="Button Text"
      />
      <ProjectCard
        bgColor="bg-blue-600"
        logo={Project3}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
        btnText="Button Text"
      />
      <ProjectCard
        bgColor="bg-teal-600"
        logo={Project4}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
        btnText="Button Text"
      />
    </div>
  );
};

export default ProjectContainer;
