import {Button} from "@/components/components";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  logo: any;
  text: string;
  btnText: string;
  bgColor: string
};

const ProjectContainer = (props: Props) => {
  return (
    <div className={twMerge("bg-slate-600 p-4 lg:p-8 flex flex-col lg:flex-row gap-4", props.bgColor)}>
      <div className="w-full">
        <div className="relative w-[100px] h-[40px] mb-[40px]">
          <Image src={props.logo} alt={props.logo} fill />
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="aspect-[4/3] w-[400px] bg-white/25 hidden lg:block"></div>
          <div className="aspect-[4/2] w-full bg-white/25"></div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="aspect-[4/2.7] w-full bg-white/25 hidden lg:block"></div>
        <div className="lg:pl-8 flex flex-col gap-4 lg:gap-8">
          <p className=" text-lg">{props.text}</p>
          <Button text={props.btnText} className="py-3 px-6 text-base" icon />
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
