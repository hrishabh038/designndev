"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Logo } from "../components";
import { usePathname } from "next/navigation";
import { TbArrowLoopRight } from "react-icons/tb";

const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
];

type Props = {
  className?: string;
};

const Navbar = (props: Props) => {
  const routes = navRoutes;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerClass, setHeaderClass] = useState("bg-transparent shadow-none");

  const handleScroll = () => {
    const newScrollPosition = window.scrollY;

    if (newScrollPosition > 20) {
      setHeaderClass("bg-[#121212] shadow-2xl");
    } else {
      setHeaderClass("bg-transparent shadow-none");
    }

    setScrollPosition(newScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 right-0 global-padding z-[999999] duration-500 bg-transparent shadow-none",
        headerClass
      )}
    >
      <div
        className={twMerge(
          "w-full h-[70px] border-b border-white/5 flex items-center justify-between",
          props.className
        )}
      >
        <Logo className="w-[120px]" />
        <ul className="hidden sm:flex items-center sm:gap-4 md:gap-5 lg:gap-10">
          {routes.map((route) => (
            <li key={route.title}>
              <NavButton title={route.title} href={route.href} />
            </li>
          ))}
        </ul>
        <Button
          hideNshow="hidden sm:flex"
          text="Start a project"
          href="/contact"
          icon
        />
        <div className="p-1 bg-white/20 rounded-full cursor-pointer sm:hidden">
          <div className="bg-white/30 p-1 rounded-full">
            <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

type NavButtonProps = {
  href: string;
  title: string;
};

const NavButton = (props: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <a href={props.href}>
      <button
        className={twMerge(
          " text-neutral-300 flex items-center",
          !isActive && "hover:scale-110 hover:text-white text-[15px]"
        )}
      >
        {isActive && (
          <span className="min-w-[5px] min-h-[5px] bg-green-500 rounded-full gap-1 mr-[4px]"></span>
        )}
        <span>{props.title}</span>
      </button>
    </a>
  );
};

export default Navbar;
