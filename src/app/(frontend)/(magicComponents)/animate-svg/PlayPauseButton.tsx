"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pausePath =
  "M14.7991 7.99863C16.1113 8.75619 16.1113 10.6501 14.7992 11.4077L3.07674 18.1756C1.7646 18.9332 0.124419 17.9862 0.124419 16.4711L0.12442 2.93521C0.12442 1.42008 1.76459 0.473121 3.07673 1.23069L14.7991 7.99863Z";
const playPath1 =
  "M10.186 2.61667C10.186 1.52951 11.0674 0.648193 12.1545 0.648193H14.1188C15.2059 0.648193 16.0872 1.52951 16.0872 2.61667V16.3833C16.0872 17.4705 15.2059 18.3518 14.1188 18.3518H12.1545C11.0673 18.3518 10.186 17.4705 10.186 16.3833V2.61667Z ";
const playPath2 =
  "M0.91272 2.61667C0.91272 1.52951 1.79404 0.648193 2.88119 0.648193H4.84546C5.93261 0.648193 6.81393 1.52951 6.81393 2.61667V16.3833C6.81393 17.4705 5.93261 18.3518 4.84545 18.3518H2.88119C1.79403 18.3518 0.91272 17.4705 0.91272 16.3833V2.61667Z";

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle between play and pause
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <button
      onClick={togglePlayPause}
      aria-label="Play/Pause"
      className="p-2 text-[#f8a97e]"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 0 20 20"
        width="24"
        height="24"
        fill="currentColor"
        className={"flex items-center justify-center"}
      >
        <AnimatePresence initial={false}>
          {isPlaying ? (
            <>
              <motion.path
                key={"play-path1"}
                d={playPath1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                key={"play-path2"}
                d={playPath2}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  ease: "easeInOut",
                }}
              />
            </>
          ) : (
            <motion.path
              key={"pause"}
              d={pausePath}
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 30,
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>
      </motion.svg>
    </button>
  );
};

export default PlayPauseButton;
