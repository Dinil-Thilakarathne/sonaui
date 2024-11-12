"use client";

import { useClock } from "@/hooks/useClock";
import { cn } from "@/lib/utils";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

type LoopSpeedVariant = "slow" | "medium" | "fast";

interface scrollTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  loopSpeed?: LoopSpeedVariant;
}

const ScrollText = ({
  children,
  className,
  loopSpeed = "fast",
  ...props
}: scrollTextProps) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const [direction, setDirection] = useState<boolean>(false);

  const durationMapping: Record<LoopSpeedVariant, number> = {
    slow: 34000,
    medium: 22000,
    fast: 6000,
  };

  const ref = useRef<HTMLDivElement>(null);

  // `useInView` hook to detect if the ref element is in the viewport
  const isInView = useInView(ref);

  // Use `useClock` to manage time-based motion
  const clock = useClock({
    defaultValue: Date.now(),
    reverse: direction,
  }).value;

  const actualDuration = durationMapping[loopSpeed];

  const progress = useTransform(
    clock,
    (time) => (time % actualDuration) / actualDuration,
  );

  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;

  useEffect(() => {
    return velocityFactor.onChange((value) => {
      if (value < 0) {
        setDirection(true);
      } else if (value > 0) {
        setDirection(false);
      }
    });
  }, [velocityFactor]);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={cn(
        "flex w-fit flex-nowrap overflow-hidden whitespace-nowrap border",
        className,
      )}
      {...props}
      ref={ref}
    >
      <motion.div
        className="relative flex w-fit flex-nowrap whitespace-nowrap text-4xl uppercase"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <motion.span className="relative block px-8" style={{ translateX }}>
          {children}
        </motion.span>
        <motion.span
          className="absolute left-full block px-8"
          style={{ translateX }}
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ScrollText;
