import React from "react";

import { cn } from "@/lib/utils";

interface ComponentPreviewerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ComponentPreviewer = ({
  children,
  className,
}: ComponentPreviewerProps) => {
  return (
    <div className="h-auto w-full px-0.5 md:px-4">
      <h1 className="text-2xl font-medium">Preview</h1>
      <div className="mt-2 flex w-full justify-center rounded-md border">
        <div
          className={cn(
            "flex max-h-[50vh] min-h-[480px] w-full items-center justify-center rounded-lg px-2 sm:px-0 lg:max-w-[720px]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentPreviewer;
