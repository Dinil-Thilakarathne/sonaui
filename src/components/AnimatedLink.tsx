import Link from "next/link";
import React from "react";
import AnimatedText from "./AnimatedText";
import { ArrowUpRight } from "lucide-react";

interface AnimatedLinkProps {
  text: string;
  link: string;
}

const AnimatedLink = ({ text, link }: AnimatedLinkProps) => {
  return (
    <div>
      <Link href={link} className="relative flex">
        <AnimatedText
          text={text}
          className="text-xl uppercase"
          type="characters"
        />
        <span className="relative -top-[10px] h-fit flex-grow-0 text-xs scale-75">
          <ArrowUpRight />
        </span>
      </Link>
    </div>
  );
};

export default AnimatedLink;
