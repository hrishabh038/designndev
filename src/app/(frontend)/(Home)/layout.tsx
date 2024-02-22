import { Navbar } from "@/components/components";
import React from "react";

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return (
    <main>
      <Navbar className="h-[70px]" />
      {props.children}
    </main>
  );
};

export default layout;
