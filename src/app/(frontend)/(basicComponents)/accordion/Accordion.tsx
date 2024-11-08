"use client";

import { motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";
import AnimatedPlusMinusButton from "./AnimatedPlusMinusButton";
import { cn } from "@/lib/utils";

// Types
interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface AccordionItemHeaderProps {
  children: React.ReactNode;
}
interface AccordionItemTriggerProps {
  value: string;
  strokeColor?: string;
}

interface AccordionItemContentProps {
  children: React.ReactNode;
  value: string;
}

const AccordionContext = createContext<{
  openItems: Set<string>;
  toggleItem: (value: string) => void;
} | null>(null);

const AccordionRoot = ({
  children,
  allowMultiple = false,
  className,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(value)) {
        newOpenItems.delete(value);
      } else {
        if (!allowMultiple) newOpenItems.clear();
        newOpenItems.add(value);
      }
      return newOpenItems;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div role="presentation" className={cn("", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, className, style }: AccordionItemProps) => {
  return (
    <div
      role="presentation"
      className={cn("relative overflow-hidden rounded-xl px-8 py-6", className)}
      style={style}
    >
      <div
        className="absolute left-0 top-0 h-full w-full border border-solid"
        style={{
          borderImageSource:
            "linear-gradient(69.85deg, rgba(255, 255, 255, 0.06) 3.32%, rgba(255, 255, 255, 0.25) 24.58%, rgba(255, 255, 255, 0.045) 47.66%, rgba(255, 255, 255, 0.25) 70.27%, rgba(255, 255, 255, 0.055) 93.8%)",
          borderImageSlice: "1",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

const AccordionItemHeader = ({ children }: AccordionItemHeaderProps) => {
  return <div className="flex border-lime-400">{children}</div>;
};

const AccordionItemTrigger = ({
  value,
  strokeColor = "black",
}: AccordionItemTriggerProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within AccordionRoot");

  const { openItems, toggleItem } = context;
  const isOpen = openItems.has(value);

  return (
    <button
      aria-expanded={isOpen}
      onClick={() => toggleItem(value)}
      className="text-left font-medium focus:outline-none"
    >
      <AnimatedPlusMinusButton isOpen={isOpen} strokeColor={strokeColor} />
    </button>
  );
};

const AccordionItemContent = ({
  children,
  value,
}: AccordionItemContentProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionContent must be used within AccordionRoot");

  const { openItems } = context;
  const isOpen = openItems.has(value);

  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [isOpen]);

  return (
    <motion.div
      role="region"
      aria-hidden={!isOpen}
      className={`overflow-hidden text-sm transition-[height] duration-300`}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? height : 0 }}
      transition={{ duration: 0.45, ease: "easeIn" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="pt-5"
        ref={ref}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export {
  AccordionRoot,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionContext,
};
