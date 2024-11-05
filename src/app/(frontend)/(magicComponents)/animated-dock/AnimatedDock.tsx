"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface AnimatedDockProps {
  children: ReactNode;
}

const AnimatedDock = ({ children }: AnimatedDockProps) => {
  return (
    <div
      className={`animated-dock flex items-end justify-center p-4`}
      style={{ "--animated-dock-height": "75px" } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

interface AnimatedDockItemProps {
  icon: string;
  tag: string;
}

const AnimatedDockItem = ({ icon, tag }: AnimatedDockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="animated-dock__item relative flex h-fit cursor-pointer justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.span
          className="absolute -top-10 mx-auto block text-nowrap rounded-md border 
          bg-slate-100 px-2 py-0.5 text-lg dark:bg-slate-900 dark:text-slate-100"
          initial={{ y: 10, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
        >
          {tag}
        </motion.span>
      )}
      <Image
        src={icon}
        alt={tag}
        width={240}
        height={240}
        className="aspect-square size-[75px] transition-[height_,_width] duration-300"
      />
    </div>
  );
};

export { AnimatedDock, AnimatedDockItem };
