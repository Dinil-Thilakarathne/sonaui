import React from "react";
import Link from "next/link";

import { ModeToggle } from "./ThemeToggle";
import { Badge } from "./ui/badge";
import AnimatedLink from "./AnimatedLink";

const Header = () => {
  return (
    <header className="header-h z-[999] mx-auto flex w-full items-center justify-between p-4">
      <Link href={"/"}>
        <div className="flex gap-0.5">
          <h1 className="select-none text-2xl">SonaUI</h1>
          <Badge
            variant={"soon"}
            className="h-fit flex-grow-0 text-[0.75rem] leading-[1]"
          >
            beta
          </Badge>
        </div>
      </Link>
      <div>
        <div className="flex items-center">
          <AnimatedLink
            text="Github"
            link="https://github.com/Dinil-Thilakarathne/sonaui/"
          />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
