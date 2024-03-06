import React from "react";
import { Project1, Project2, Project3, Project4 } from "@/assects/assects";
import { PageBanner } from "@/components/components";
import { ProjectContainer } from "@/containers/containers";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {};

const ReadMore = (props: Props) => {
  return (
    <section className="flex flex-col">
      <PageBanner
        title="Blog"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        odit sed iusto provident maiores neque dolores? Eos corporis debitis
        totam suscipit, itaque eaque ducimus, iste quaerat eligendi rem ipsam
        nulla."
      />
      <div className="global-padding z-10 py-20 bg-[#121212] flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-neutral-600">
            <span>27-March-2024</span>
        </div>
        <div className="w-full aspect-video bg-white/25">

        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iure odio, laudantium, ullam exercitationem tenetur distinctio accusantium repellendus, porro sequi voluptatum quibusdam vitae atque doloribus in placeat ea tempora officia.</h1>
        <p className="sm:text-lg md:text-xl lg:text-2xl text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur, cum recusandae repudiandae similique consequuntur adipisci quia exercitationem impedit omnis ex nisi. Pariatur eligendi impedit temporibus velit fuga deleniti recusandae?</p>

        <div className="w-full text-neutral-600 flex items-center justify-between pt-10">
            <div className="flex items-center gap-2"><ArrowLeft size={20} /> Previous</div>
            <div className="w-[100px] bg-white/5 h-[1px]"></div>
            <div className="flex items-center gap-2">Next<ArrowRight size={20} /></div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
