import React from "react";
import { TbArrowLoopRight } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
  icon?: true | false;
  href?: string
  hideNshow?: string
};

const Button = (props: Props) => {
  return (
    <a href={props.href} className={twMerge(props.hideNshow)}>
      <button className={twMerge("bg-white hover:bg-white/80 rounded-2xl px-[18px] py-[7px] text-black flex items-center gap-2 text-sm", props.className)}>
        <span>{props.text}</span>
        {props.icon && (
          <span>
            <TbArrowLoopRight size={18} />
          </span>
        )}
      </button>
    </a>
  );
};

export default Button;
