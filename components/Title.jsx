import { cn } from "@/lib/utils";
import React from "react";

const Title = ({ className, children }) => {
  return (
    <h2 className={cn("text-xl text-lightSky font-bold mb-4", className)}>
      {children}
    </h2>
  );
};

export default Title;
