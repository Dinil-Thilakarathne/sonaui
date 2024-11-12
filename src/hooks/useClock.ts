"use client";
import * as React from "react";
import { MotionValue, useAnimationFrame, useMotionValue } from "framer-motion";

type UseClockProps = {
  defaultValue?: number;
  reverse?: boolean;
  speed?: number;
};

type UseClockReturn = {
  value: MotionValue<number>;
  stop: () => void;
  start: () => void;
};

export const useClock = ({
  defaultValue = 0,
  reverse = false,
  speed = 1,
}: UseClockProps = {}): UseClockReturn => {
  const clock = useMotionValue(defaultValue);
  const paused = React.useRef(false);
  useAnimationFrame((t, dt) => {
    if (paused.current) {
      return;
    }
    // Update clock value based on reverse setting
    clock.set(clock.get() + (reverse ? -dt : dt) * speed);
  });
  return {
    value: clock,
    stop: () => {
      paused.current = true;
    },
    start: () => {
      paused.current = false;
    },
  };
};
