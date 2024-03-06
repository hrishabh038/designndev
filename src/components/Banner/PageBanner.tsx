import React from "react";
import { Button, TsParticlesBanner } from "../components";

type Props = {
  title: string;
  description: string;
};

const PageBanner = (props: Props) => {
  return (
    <div
      className="border-b border-white/5 banner relative h-screen w-full flex flex-col items-center justify-center pt-[85px] global-padding overflow-hidden"
      style={{
        backgroundImage: `url(images/page_banner_bg.png)`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col  w-full md:w-[700px] ">
        <h1 className="font-semibold text-[110px] sm:text-[150px]  text-justify">
          {props.title}
        </h1>
        <p className=" text-justify">{props.description}</p>
      </div>
    </div>
  );
};

export default PageBanner;
