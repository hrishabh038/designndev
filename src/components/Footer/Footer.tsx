import { MeetTheTeam } from "@/assects/assects";
import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#121212] z-10 w-full global-padding relative">
      <div className="flex gap-4">
        <a
          href="/meet-the-team"
          className="bg-indigo-700 hover:bg-indigo-800 w-full sm:max-w-[400px] rounded-xl h-[400px] pt-4 lg:pt-8 relative flex flex-col justify-between"
        >
          <div className="flex flex-col gap-2 px-4 lg:px-8">
            <div className="flex items-center justify-between">
              <span>We have a good team?</span>
              <span>
                <ArrowRight size={20} />
              </span>
            </div>
            <p className="text-3xl font-semibold">Meet the team...</p>
          </div>
          <Image
            className="w-full -mr-10 rounded-2xl"
            src={MeetTheTeam}
            alt="Priyal Jaiswal"
          />
        </a>

        <a
          href="/contact"
          className="bg-amber-700 hover:bg-amber-800 w-full rounded-2xl h-[400px] p-4 lg:p-8 flex flex-col justify-between group"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span>So, What are you thinking?</span>
              <span>
                <ArrowRight size={20} />
              </span>
            </div>
            <p className="text-3xl font-semibold">Lets Get In Touch!</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-7xl font-bold">Start Your Project</p>
            <button className="font-semibold text-lg w-fit py-3 px-6 border rounded-2xl group-hover:bg-amber-900">
              Contact Us
            </button>
          </div>
        </a>
      </div>
      <div className="h-[100px] flex items-center text-neutral-500">
        Team DesignNDev reserves all rights &copy; 2024.
      </div>
    </footer>
  );
};

export default Footer;
