import React from "react";
import { Banner } from "@/components/components";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="flex flex-col">
      <Banner />
      <div className="global-padding z-10 py-20 bg-[#121212]">
       
      </div>
    </section>
  );
};

export default Home;
