"use client";
import React, { useEffect, useState } from "react";
import { TransitionPanel } from "./TransitionPanel";
import useMeasure from "react-use-measure";
import { Variant } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { TESTIMONIALS_QUERYResult } from "@/sanity/types";

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}

type TransitionPanelProps = {
  data: TESTIMONIALS_QUERYResult;
};

export function TransitionPanelCard({ data }: TransitionPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (data) {
      if (activeIndex >= data?.length) setActiveIndex(data.length - 1);
    }
  }, [activeIndex]);

  const FEATURES = [
    {
      title: "Brand Identity",
      description:
        "Craft a unique brand presence with custom logos and style guides that establish cohesive, recognizable messaging across all channels.",
    },
    {
      title: "Product Design",
      description:
        "Design and optimize products for an exceptional user experience, delivering seamless, intuitive interactions—especially in web applications.",
    },
    {
      title: "Web Development",
      description:
        "Build engaging, visually compelling websites with user-focused design, ensuring a strong, effective online presence.",
    },
    {
      title: "Design System",
      description:
        "Implement a cohesive design system to reinforce your brand across all platforms and products, supporting consistency and scalability.",
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const PANEL_WIDTH = 364;
  const variants: { enter: Variant; center: Variant; exit: Variant } = {
    enter: (direction) => ({
      x: direction > 0 ? PANEL_WIDTH : -PANEL_WIDTH,
      opacity: 0,
      height: bounds.height > 0 ? bounds.height : "auto",
      position: "initial",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      height: bounds.height > 0 ? bounds.height : "auto",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? PANEL_WIDTH : -PANEL_WIDTH,
      opacity: 0,
      position: "absolute",
      top: 0,
      width: "100%",
    }),
  };

  return (
    <div
      className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700"
      style={{ width: `${PANEL_WIDTH}px` }}
    >
      <TransitionPanel
        activeIndex={activeIndex}
        variants={variants}
        transition={{
          x: { type: "spring", stiffness: 200, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {data.map((testimonial, index) => (
          <div key={index} className="px-4 pt-4" ref={ref}>
            <div>
              <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
                {testimonial.user}
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {testimonial.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-end gap-x-4 p-4">
        {activeIndex > 0 && (
          <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
            <ArrowLeft />
          </Button>
        )}
        {activeIndex < FEATURES.length - 1 && (
          <Button onClick={() => handleSetActiveIndex(activeIndex + 1)}>
            <ArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}
