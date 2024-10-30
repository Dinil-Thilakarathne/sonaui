import React from "react";
import { TransitionPanelCard } from "./TransitionPanelCard";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import ComponentPreviewer from "@/components/ComponentPreviewer";
import { getFileSourceCode } from "@/hooks/useFileSourceCode";
import CodePreview from "@/components/CodePreviewer";

const Page = async () => {
  const { data: testimonials } = await sanityFetch({
    query: TESTIMONIALS_QUERY,
  });
  const sourceCode =  getFileSourceCode(
    "src/app/(frontend)/(magicComponents)/transition-panel/TransitionPanel.tsx",
  );
  return (
    <div className="flex flex-col py-4">
      <ComponentPreviewer>
        <TransitionPanelCard data={testimonials} />
      </ComponentPreviewer>
      <CodePreview code={sourceCode} />
    </div>
  );
};

export default Page;
