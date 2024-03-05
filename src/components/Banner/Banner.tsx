import React from "react";
import { Button, TsParticlesBanner } from "../components";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner relative h-screen w-full flex flex-col items-center justify-center pt-[70px] global-padding overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-between gap-8 z-[9999]">
        <div className="flex flex-col items-center justify-center gap-6 ">
          <p className="text-center rounded-full py-1 px-2 border border-neutral-600 text-xs text-neutral-400">
          Unlock the Power of Technology with Us!
          </p>
          <div className="flex flex-col gap-5  w-full md:w-[700px]">
            <div
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
              style={{ lineHeight: "normal" }}
            >
              Turn ideas into digital wonders with our top-notch web and app
              services!
            </div>
            <p className="text-center text-neutral-400 text-sm">
              Unlock the full potential of your business with our expert web and
              app development solutions. We specialize in creating stunning,
              user-friendly websites and powerful, intuitive applications that
              will captivate your audience and drive your success.
            </p>
          </div>
          <Button
            className="bg-blue-500 text-white hover:bg-blue-400 text-base py-3 px-6"
            text="Start a project"
            href="/contact"
            icon
          />
        </div>
        <div className="h-[300px] w-full md:w-[700px] bg-white/25 rounded-2xl -mb-[275px]"></div>
      </div>
      <TsParticlesBanner />
    </div>
  );
};

export default Banner;
