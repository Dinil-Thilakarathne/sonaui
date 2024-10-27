import React from "react";
import { TransitionPanelCard } from "./TransitionPanelCard";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

const Page = async () => {
  const { data: testimonials } = await sanityFetch({
    query: TESTIMONIALS_QUERY,
  });
  return (
    <div className="flex h-screen items-center justify-center">
      <TransitionPanelCard data={testimonials} />
    </div>
  );
};

export default Page;
