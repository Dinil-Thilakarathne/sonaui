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
    <div className={cn("h-auto w-full px-0.5 md:px-4", className)}>
      <h1 className=" text-2xl font-medium">Preview</h1>
      <div className="flex w-full justify-center border rounded-md mt-2">
        <div className="flex max-h-[50vh] min-h-[480px] w-full max-w-[1080px] items-center justify-center rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentPreviewer;
