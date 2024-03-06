import React from "react";
import { PageBanner } from "@/components/components";
import { ProjectContainer } from "@/containers/containers";

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="flex flex-col">
      <PageBanner
        title="Work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        odit sed iusto provident maiores neque dolores? Eos corporis debitis
        totam suscipit, itaque eaque ducimus, iste quaerat eligendi rem ipsam
        nulla."
      />
      <div className="global-padding z-10 py-20 bg-[#121212]">
        <ProjectContainer />
      </div>
    </section>
  );
};

export default Work;
