"use client";
import { statsData } from "@/constants/navbarData";
import React from "react";
import CountUp from "react-countup";

const Statstistics = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap:2.5 md:gap-5">
      {statsData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col flex-1 gap-2 md:gap-4 md:flex-row items-center justify-center lg:justify-start"
        >
          <p className="text-5xl md:text-7xl font-extrabold text-white">
            <CountUp end={item?.num} duration={7} delay={2} />
          </p>
          <p className="leading-snug text-sm">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statstistics;
