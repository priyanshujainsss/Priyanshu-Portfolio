"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
const HomeDescription = () => {
  const description =
    "s Bringing your ideas to life with beautiful, user-friendly websites. I create responsive and engaging designs that not only look great but also work perfectly, helping your brand stand out and connect with your audience. From clean layouts to seamless functionality, every detail is crafted to deliver an exceptional online experience that leaves a lasting impression.";
  const [hasLoaded, setHasLoaded] = useState(false);
  const { displayedText, isCompleted } = useTypeWriter(description, 30);
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
      }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{ color: isCompleted ? "white" : "rgb(156 163 175)" }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
