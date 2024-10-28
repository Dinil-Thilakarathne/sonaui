import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "./ui/sidebar";
import { Badge } from "./ui/badge";
import { sanityFetch } from "@/sanity/lib/live";
import { SONAUI_COMPONENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const SideBar = async () => {
  const { data: ComponentData } = await sanityFetch({
    query: SONAUI_COMPONENTS_QUERY,
  });
  console.log(ComponentData);

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
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {ComponentData.map((comp, i) => {
            return (
              <SidebarGroupContent key={i} className=" ">
                {i === 0 && (
                  <SidebarGroupLabel className=" uppercase">{comp.category}</SidebarGroupLabel>
                )}
                {comp.pageLink && (
                  <Link href={comp.pageLink} className="  w-full flex gap-0.5">
                    <span className="text-xl">{comp.name}</span>
                    <Badge variant={comp.tags} className=" text-xs flex-grow-0 h-fit px-2 py-0.5">
                      {comp.tags}
                    </Badge>
                  </Link>
                )}
              </SidebarGroupContent>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
