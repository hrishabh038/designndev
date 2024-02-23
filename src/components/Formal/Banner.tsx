import React from "react";
import { Button, TsParticlesBanner } from "../components";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner relative h-screen w-full flex flex-col items-center justify-center pt-[70px] global-padding overflow-hidden">
      <div className="w-full flex flex-col items-center justify-between gap-8 z-[9999]">
        <div className="flex flex-col items-center justify-center gap-8 ">
          <p className="text-center rounded-full py-1 px-2 border border-neutral-600 text-xs text-neutral-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            recusandae.
          </p>
          <div className="flex flex-col gap-4  w-full md:w-[700px]">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
            <p className="text-center text-neutral-400 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nisi laudantium dicta, alias rerum suscipit molestiae eaque
              incidunt. Libero voluptatibus quae voluptatem aperiam magni nulla
              ad laborum nobis, necessitatibus tenetur!
            </p>
          </div>
          <Button
            className="bg-blue-500 text-white hover:bg-blue-400"
            text="Start a project"
            href="/contact"
            icon
          />
        </div>
        <div className="h-[300px] w-full md:w-[700px] bg-white/25 rounded-xl -mb-[275px]"></div>
      </div>
      <TsParticlesBanner />
    </div>
  );
};

export default Banner;