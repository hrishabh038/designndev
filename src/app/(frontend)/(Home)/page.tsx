import React from "react";
import { Project1, Project2, Project3, Project4 } from "@/assects/assects";
import { Banner, TsParticlesBanner } from "@/components/components";
import { ProjectContainer } from "@/containers/containers";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="flex flex-col">
      <Banner />
      <div className="global-padding z-10 py-20 bg-[#121212]">
        <div className="flex flex-col gap-16">
          <ProjectContainer
            bgColor="bg-purple-600"
            logo={Project1}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
            btnText="Button Text"
          />
          <ProjectContainer
            bgColor="bg-orange-600"
            logo={Project2}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
            btnText="Button Text"
          />
          <ProjectContainer
            bgColor="bg-blue-600"
            logo={Project3}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
            btnText="Button Text"
          />
          <ProjectContainer
            bgColor="bg-teal-600"
            logo={Project4}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non iste quidem dolorem hic ipsa!"
            btnText="Button Text"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
