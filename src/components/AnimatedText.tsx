"use client";
import useTextSplit from "@/hooks/useTextSplit";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

type PresetType = "slideUp" | "slideDown";

interface CharacterVariants {
  character: Variants;
}

interface AnimatedTextProps {
  text: string;
  type?: "characters" | "words";
  className?: string;
  preset?: PresetType;
  variants?: CharacterVariants;
}

const defaultCharacterVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
  },
};

const presetVariants: Record<PresetType, CharacterVariants> = {
  slideUp: {
    character: {
      initial: {
        y: 0,
      },
      animate: {
        y: "-100%",
      },
    },
  },
  slideDown: {
    character: {
      initial: {
        y: 0,
      },
      animate: {
        y: "100%",
      },
    },
  },
};

const presetClasses: Record<PresetType, string> = {
  slideUp: "",
  slideDown: " -top-full",
};

const AnimatedText = ({
  text,
  type,
  className,
  variants,
  preset = "slideUp",
}: AnimatedTextProps) => {
  const splitText = useTextSplit(text, {
    splitBy: type === "characters" ? "characters" : "words",
    preserveWhitespace: type === "words" ? true : true,
  });
  const [isHover, setIsHover] = useState(false);

  // Select appropriate variants: either preset or passed variants
  const selectedVariants = preset
    ? presetVariants[preset]
    : { character: defaultCharacterVariants };
  const characterVariant = variants?.character || selectedVariants.character;

  const presetClass = presetClasses[preset];

  return (
    <div
      className={cn("relative overflow-hidden text-xl ", className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {preset === "slideDown" && (
        <CloneText
          splitText={splitText}
          characterVariant={characterVariant}
          isHover={isHover}
          presetClass={presetClass}
        />
      )}
      <motion.p className="relative select-none leading-[1]">
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariant}
            animate={isHover === true ? "animate" : "initial"}
            className="inline-block"
            transition={{ delay: index * 0.025, type: "tween" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>

      {preset === "slideUp" && (
        <CloneText
          splitText={splitText}
          characterVariant={characterVariant}
          isHover={isHover}
        />
      )}
    </div>
  );
};

export default AnimatedText;

type CloneTextProps = {
  splitText: string[];
  characterVariant: Variants;
  isHover: boolean;
  presetClass?: string;
};

const CloneText = ({
  splitText,
  characterVariant,
  isHover,
  presetClass,
}: CloneTextProps) => {
  return (
    <motion.p className={cn("absolute leading-[1] ", presetClass)}>
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariant}
          animate={isHover === true ? "animate" : "initial"}
          className={"inline-block text-red-400"}
          transition={{ delay: index * 0.025, type: "tween" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};
