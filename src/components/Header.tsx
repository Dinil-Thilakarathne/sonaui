import React from "react";
import { ModeToggle } from "./ThemeToggle";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <div className="flex gap-0.5">
        <h1 className="select-none text-2xl">SonaUI</h1>
        <Badge variant={"soon"} className="h-fit flex-grow-0">
          Beta
        </Badge>
      </div>
      <div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
