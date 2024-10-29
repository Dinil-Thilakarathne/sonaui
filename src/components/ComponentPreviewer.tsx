import { cn } from "@/lib/utils";
import React from "react";

interface ComponentPreviewerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ComponentPreviewer = ({
  children,
  className,
}: ComponentPreviewerProps) => {
  return (
    <div className={cn("h-auto w-full px-4", className)}>
      <div className="mx-auto max-w-[1080px]">
        <h3 className="text-4xl">Preview</h3>
      </div>
      <div className="flex w-full justify-center pt-8">
        <div className="flex max-h-[50vh] min-h-[480px] w-full max-w-[1080px] items-center justify-center rounded-lg border p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentPreviewer;
