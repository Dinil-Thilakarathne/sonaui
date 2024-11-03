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
    className={`w-full rounded-md ${className}`}
  >
    <TabsPrimitive.List className="flex gap-x-4 py-2" aria-label="Tabs">
      {tabs.map((tab) => (
        <TabsPrimitive.Trigger
          key={tab.id}
          value={tab.id}
          className=" text-lg md:px-4 py-2  text-slate-600 hover:text-slate-900 focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 dark:text-slate-400 hover:dark:text-slate-200 data-[state=active]:dark:text-slate-200 data-[state=active]:text-slate-900"
        >
          {tab.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>

    {tabs.map((tab) => (
      <TabsPrimitive.Content
        key={tab.id}
        value={tab.id}
        className="rounded-md border md:p-4"
      >
        {tab.content}
      </TabsPrimitive.Content>
    ))}
  </TabsPrimitive.Root>
);
