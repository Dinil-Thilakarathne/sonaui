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
      className={cn("relative overflow-hidden px-8 py-4", className)}
      style={style}
    >
      <div className="absolute left-0 top-0 h-full w-full rounded-xl border border-solid" />
      <div className="relative">{children}</div>
    </div>
  );
};

const AccordionItemHeader = ({ children }: AccordionItemHeaderProps) => {
  return <div className="flex">{children}</div>;
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

  const variants = {
    open: { opacity: [0, 0.5, 1], y: 0 },
    exit: { opacity: 0, y: 50 },
    initial: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      role="region"
      aria-hidden={!isOpen}
      className={`overflow-hidden text-sm transition-[height] duration-300`}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? height : 0 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
    >
      <motion.div
        initial="initial"
        animate={isOpen ? "open" : "exit"}
        transition={{
          duration: 0.45,
          ease: "easeIn",
          delay: 0.3,
          type: "tween",
        }}
        variants={variants}
        className="pt-4 dark:text-slate-300"
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
