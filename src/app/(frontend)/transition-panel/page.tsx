import React from "react";
import { TransitionPanelCard } from "./TransitionPanelCard";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import ComponentPreviewer from "@/components/ComponentPreviewer";

const Page = async () => {
  const { data: testimonials } = await sanityFetch({
    query: TESTIMONIALS_QUERY,
  });
  return (
    <div className="flex h-screen flex-col py-4">
      <ComponentPreviewer>
        <TransitionPanelCard data={testimonials} />
      </ComponentPreviewer>
    </div>
  );
};

export default Page;
