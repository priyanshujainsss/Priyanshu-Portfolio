"use client";
import React from "react";
import Container from "./Container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const PageLayout = ({ children, className }) => {
  return (
    <Container className={cn('w-full',className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2.4,
            ease: "easeIn",
          },
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default PageLayout;
