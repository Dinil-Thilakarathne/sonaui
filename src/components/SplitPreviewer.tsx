import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";

// Define types for the props
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SplitPreviewerProps {
  tabs: Tab[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const SplitPreviewer: React.FC<SplitPreviewerProps> = ({
  tabs,
  defaultValue,
  onValueChange,
  className = "",
}) => (
  <TabsPrimitive.Root
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    className={cn("w-full rounded-md md:px-4", className)}
  >
    <h3 className="mt-8  text-2xl font-medium">Source Code</h3>
    <TabsPrimitive.List className="flex gap-x-4 py-2" aria-label="Tabs">
      {tabs.map((tab) => (
        <TabsPrimitive.Trigger
          key={tab.id}
          value={tab.id}
          className="py-2 text-lg text-slate-600 hover:text-slate-900 focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-slate-900 dark:text-slate-400 hover:dark:text-slate-200 data-[state=active]:dark:text-slate-200 md:px-4"
        >
          {tab.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>

    {tabs.map((tab) => (
      <TabsPrimitive.Content
        key={tab.id}
        value={tab.id}
        className="rounded-md border"
      >
        {tab.content}
      </TabsPrimitive.Content>
    ))}
  </TabsPrimitive.Root>
);
