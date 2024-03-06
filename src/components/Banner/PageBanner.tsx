import React from "react";
import { Button, TsParticlesBanner } from "../components";

type Props = {
  title: string;
  description: string;
};

const PageBanner = (props: Props) => {
  return (
    <div className="border-b border-white/5 banner relative h-screen w-full flex flex-col items-center justify-center pt-[85px] global-padding overflow-hidden">
      <div className="flex flex-col  w-full sm:w-[600px] ">
        <h1 className="font-semibold text-[110px] sm:text-[150px]">
          {props.title}
        </h1>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
};

export default PageBanner;
