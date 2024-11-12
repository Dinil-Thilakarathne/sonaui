"use client";
import { useClock } from "@/hooks/useClock";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface scrollTextProps {
  children: React.ReactNode;
  scrollDirection?: "horizontal" | "vertical";
  baseVelocity?: number;
}

const ScrollText = ({ children, baseVelocity = 8 }: scrollTextProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Ref to the text container and state for the calculated width
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [numberOfRepeats, setNumberOfRepeats] = useState(1);

  // Dynamically calculate the width of the text container on mount
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      const textElementWidth = textRef.current.offsetWidth;

      const containerWidth = containerRef.current.clientWidth;
      const repeats = Math.ceil(containerWidth / textElementWidth) + 1;
      setNumberOfRepeats(repeats);
    }
  }, []);

  const wrapPercentage = 100 / numberOfRepeats;
  const x = useTransform(
    baseX,
    (v) => `${((v % wrapPercentage) + wrapPercentage) % wrapPercentage}%`,
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hiden flex w-[500px] flex-nowrap whitespace-nowrap border-2 border-red-500"
      ref={containerRef}
    >
      {Array.from({ length: numberOfRepeats }, (_, i) => (
        <motion.div
          className="flex w-full flex-nowrap justify-between whitespace-nowrap border text-4xl uppercase"
          style={{ x }}
          key={i}
        >
          <motion.span className="block border px-8" ref={textRef}>
            {children}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollText;
