import React from "react";
import { Project1, Project2, Project3, Project4 } from "@/assects/assects";
import { PageBanner } from "@/components/components";
import { ProjectContainer } from "@/containers/containers";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="flex flex-col">
      <PageBanner
        title="About"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        odit sed iusto provident maiores neque dolores? Eos corporis debitis
        totam suscipit, itaque eaque ducimus, iste quaerat eligendi rem ipsam
        nulla."
      />
      <div className="global-padding z-10 py-20 bg-[#121212] flex flex-col gap-32">
        <div className="flex items-start gap-6 lg:gap-10 flex-col lg:flex-row">
          <div className="aspect-square bg-white/25 w-full sm:min-w-[400px] sm:max-w-[400px]"></div>
          <div className="flex flex-col  gap-6 lg:gap-10">
            <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              vitae molestiae deleniti nisi culpa facilis eaque exercitationem
              dicta. Dolorum placeat explicabo totam qui aliquam dolores?
              Aperiam non fugit dignissimos accusantium atque laboriosam,
              voluptatum a accusamus assumenda molestiae sit harum perferendis,
              ratione eos fugiat alias dolorem ducimus? Odio accusantium
              incidunt dolor repellendus doloribus perferendis nesciunt odit
              enim, laudantium delectus. Eum, totam id dolore atque porro quia
              voluptates. Est dolor laborum modi atque minima, quam quos
              delectus sunt provident exercitationem obcaecati magnam voluptatum
              suscipit commodi! Neque corporis iure officia in quaerat nulla
              debitis reprehenderit? Incidunt obcaecati culpa similique
              doloremque, quod odio saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 lg:gap-10 sm:items-end flex-col-reverse lg:flex-row">
          <div className="flex flex-col  gap-6 lg:gap-10">
            <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
            <p className="text-xl  text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              vitae molestiae deleniti nisi culpa facilis eaque exercitationem
              dicta. Dolorum placeat explicabo totam qui aliquam dolores?
              Aperiam non fugit dignissimos accusantium atque laboriosam,
              voluptatum a accusamus assumenda molestiae sit harum perferendis,
              ratione eos fugiat alias dolorem ducimus? Odio accusantium
              incidunt dolor repellendus doloribus perferendis nesciunt odit
              enim, laudantium delectus. Eum, totam id dolore atque porro quia
              voluptates. Est dolor laborum modi atque minima, quam quos
              delectus sunt provident exercitationem obcaecati magnam voluptatum
              suscipit commodi! Neque corporis iure officia in quaerat nulla
              debitis reprehenderit? Incidunt obcaecati culpa similique
              doloremque, quod odio saepe?
            </p>
          </div>
          <div className="aspect-square bg-white/25 w-full sm:min-w-[400px] sm:max-w-[400px]"></div>
        </div>

        <div className="flex items-start gap-6 lg:gap-10 flex-col lg:flex-row">
          <div className="aspect-square bg-white/25 w-full sm:min-w-[400px] sm:max-w-[400px]"></div>
          <div className="flex flex-col  gap-6 lg:gap-10">
            <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
            <p className="text-xl  text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              vitae molestiae deleniti nisi culpa facilis eaque exercitationem
              dicta. Dolorum placeat explicabo totam qui aliquam dolores?
              Aperiam non fugit dignissimos accusantium atque laboriosam,
              voluptatum a accusamus assumenda molestiae sit harum perferendis,
              ratione eos fugiat alias dolorem ducimus? Odio accusantium
              incidunt dolor repellendus doloribus perferendis nesciunt odit
              enim, laudantium delectus. Eum, totam id dolore atque porro quia
              voluptates. Est dolor laborum modi atque minima, quam quos
              delectus sunt provident exercitationem obcaecati magnam voluptatum
              suscipit commodi! Neque corporis iure officia in quaerat nulla
              debitis reprehenderit? Incidunt obcaecati culpa similique
              doloremque, quod odio saepe?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
