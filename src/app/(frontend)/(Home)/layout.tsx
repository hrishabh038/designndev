import { Footer, Navbar } from "@/components/components";
import React from "react";

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return (
    <main>
      <Navbar className="h-[70px]" />
      {props.children}
      <Footer />
    </main>
  );
};

export default layout;
