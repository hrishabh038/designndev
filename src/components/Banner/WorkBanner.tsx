import React from "react";
import { Button, TsParticlesBanner } from "../components";

type Props = {};

const WorkBanner = (props: Props) => {
  return (
    <div className="banner relative h-screen w-full flex flex-col items-center justify-center pt-[70px] global-padding overflow-hidden">
      <div className="flex flex-col  w-full sm:w-[600px] ">
        <h1 className="font-semibold text-[110px] sm:text-[150px]">Work</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          odit sed iusto provident maiores neque dolores? Eos corporis debitis
          totam suscipit, itaque eaque ducimus, iste quaerat eligendi rem ipsam
          nulla.
        </p>
      </div>
    </div>
  );
};

export default WorkBanner;
