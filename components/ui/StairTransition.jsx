"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Stairs from "../Stairs";

const StairTransition = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="h-screen w-screen fixed  top-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
