import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from "./ui/sidebar";
import { Badge } from "./ui/badge";

const SideBar = () => {
  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex gap-0.5">
          <h1 className="select-none text-2xl">SonaUI</h1>
          <Badge variant={"soon"} className="h-fit flex-grow-0">
            Beta
          </Badge>
        </div>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup>
          <h2>Sídebar</h2>
          <p>Conteúdo da Sidebar</p>
        </SidebarGroup>
        <SidebarGroup>
          <h2>Sídebar</h2>
          <p>Conteúdo da Sidebar</p>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
