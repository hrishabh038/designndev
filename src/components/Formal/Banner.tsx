import React from "react";
import { TsParticlesBanner } from "../components";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner relative h-screen w-full flex flex-col-reverse items-end justify-between pb-16 global-padding">
      <div className="w-full flex items-end justify-between z-[9999]">
        <div className=" w-full flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
          <div className="flex flex-col items-start text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[150px] leading-[1]">
            <span>Unique</span>
            <span className="-mt-[5px]">Websites</span>
          </div>
          <div className="flex flex-col items-end text-lg font-semibold leading-6">
            <span>DRIVEN BY DESIGN</span>
            <span>EMPOWERED BY TECHNOLOGY</span>
            <span>INNOVATIVE BY NATURE</span>
          </div>
        </div>
      </div>
      <TsParticlesBanner />
    </div>
  );
};

export default Banner;
