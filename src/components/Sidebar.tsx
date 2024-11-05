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
import {
  SONAUI_BASIC_COMPONENTS_QUERY,
  SONAUI_MAGIC_COMPONENTS_QUERY,
} from "@/sanity/lib/queries";
import Link from "next/link";
import ComponentLink from "./ComponentLink";

const SideBar = async () => {
  const { data: ComponentData } = await sanityFetch({
    query: SONAUI_BASIC_COMPONENTS_QUERY,
  });
  const { data: magicComponentData } = await sanityFetch({
    query: SONAUI_MAGIC_COMPONENTS_QUERY,
  });
  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
      className="sidebar-h absolute left-[none]"
    >
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup className="gap-y-2">
          {ComponentData.map((comp, i) => {
            return (
              <SidebarGroupContent key={i} className=" ">
                {i === 0 && (
                  <SidebarGroupLabel className="uppercase">
                    Basic Components
                  </SidebarGroupLabel>
                )}
                <ComponentLink
                  name={comp.name}
                  pageLink={comp.pageLink}
                  tags={comp.tags}
                />
              </SidebarGroupContent>
            );
          })}
        </SidebarGroup>
        <SidebarGroup className="gap-y-2">
          {magicComponentData.map((comp, i) => {
            return (
              <SidebarGroupContent key={i} className=" ">
                {i === 0 && (
                  <SidebarGroupLabel className="uppercase">
                    Magic Components
                  </SidebarGroupLabel>
                )}
                <ComponentLink
                  name={comp.name}
                  pageLink={comp.pageLink}
                  tags={comp.tags}
                />
              </SidebarGroupContent>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
