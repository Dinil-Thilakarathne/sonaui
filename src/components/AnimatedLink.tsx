import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

import AnimatedText from "./AnimatedText";

interface AnimatedLinkProps {
  text: string;
  link: string;
  cloneTextColor?: string;
}

const AnimatedLink = ({ text, link, cloneTextColor }: AnimatedLinkProps) => {
  return (
    <div>
      <Link href={link} className="relative flex">
        <AnimatedText
          text={text}
          className="text-xl uppercase"
          type="characters"
          cloneTextColor={cloneTextColor}
        />
        <span className="relative -top-[10px] h-fit flex-grow-0 scale-75 text-xs">
          <ArrowUpRight />
        </span>
      </Link>
    </div>
  );
};

export default AnimatedLink;
