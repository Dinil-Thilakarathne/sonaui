import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarSeparator,
} from "./ui/sidebar";
import { Badge } from "./ui/badge";
import { sanityFetch } from "@/sanity/lib/live";
import { SONAUI_BASIC_COMPONENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const SideBar = async () => {
  const { data: ComponentData } = await sanityFetch({
    query: SONAUI_BASIC_COMPONENTS_QUERY,
  });
  console.log(ComponentData);
  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
      className="sidebar-h absolute left-[none]"
    >
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {ComponentData.map((comp, i) => {
            return (
              <SidebarGroupContent key={i} className=" ">
                {i === 0 && (
                  <SidebarGroupLabel className="uppercase">
                    Basic Components
                  </SidebarGroupLabel>
                )}
                {comp.pageLink && (
                  <Link href={comp.pageLink} className="flex w-full gap-0.5">
                    <span className="text-xl">{comp.name}</span>
                    <Badge
                      variant={comp.tags}
                      className="h-fit flex-grow-0 px-2 py-0.5 text-xs"
                    >
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
