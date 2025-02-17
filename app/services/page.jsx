"use client";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WebDevelopment from "@/images/Webdevelopment.jpg"
import FrontendDevelopment from "@/images/FrontendDevelopment.jpg"
import FullStackDevelopment from "@/images/Full-StackDevelopment.jpg"
import ECommerceDevelopment from "@/images/E-CommerceDevelopment.jpg"
import WebsiteOptimization from "@/images/WebsiteOptimization.jpg"
import CustomWebApplications from "@/images/CustomWebApplications.jpeg"
import APIIntegrationDevelopment from "@/images/APIIntegrationDevelopment.jpg"
import WebsiteMaintenanceSupport from "@/images/WebsiteMaintenanceSupport.jpg"





 const services = [
  {
    id: "01",
    title: "Web Development",
    category: "Full Stack",
    description:
      "Custom websites built with React.js, Next.js, and the MERN stack.",
    stack: ["React.js", "Next.js", "MongoDB", "Express.js"],
    image: WebDevelopment,
  },
  {
    id: "02",
    title: "Frontend Development",
    category: "Frontend",
    description: "Creating user-friendly and responsive UI/UX designs.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "MUI"],
    image: FrontendDevelopment,
  },
  {
    id: "03",
    title: "Full-Stack Development",
    category: "Full Stack",
    description:
      "Developing both frontend and backend solutions with databases.",
    stack: ["React.js", "Next.js", "Node.js", "MongoDB"],
    image: FullStackDevelopment,
  },
  {
    id: "04",
    title: "E-Commerce Development",
    category: "Full Stack",
    description: "Building online stores with payment integrations.",
    stack: ["Next.js", "Stripe", "Firebase", "MongoDB"],
    image: ECommerceDevelopment,
  },
  {
    id: "05",
    title: "Website Optimization",
    category: "SEO & Performance",
    description: "Speed and SEO improvements for better performance.",
    stack: ["Lighthouse", "Google Analytics", "Next.js"],
    image: WebsiteOptimization,
  },
  {
    id: "06",
    title: "Custom Web Applications",
    category: "Full Stack",
    description: "Developing interactive and dynamic web apps.",
    stack: ["React.js", "Next.js", "Node.js", "PostgreSQL"],
    image: CustomWebApplications,
  },
  {
    id: "07",
    title: "API Integration & Development",
    category: "Backend",
    description: "Connecting third-party services and building custom APIs.",
    stack: ["Node.js", "Express.js", "GraphQL", "REST API"],
    image: APIIntegrationDevelopment,
  },
  {
    id: "08",
    title: "Website Maintenance & Support",
    category: "Support",
    description: "Regular updates, bug fixes, and feature enhancements.",
    stack: ["Next.js", "React.js", "Node.js"],
    image: WebsiteMaintenanceSupport,
  },
];

const Services = () => {
  return (
    <div className="py-6 md:py-12 text-white">
      <PageLayout>
        <div className="flex flex-col  gap-7">
          {services?.map((project, index) => (
            <Card className="bg-bodyColor border-lightSky/20 " key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                  <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0 group">
                    <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                      <h2
                        className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-white"
                        style={{
                          WebkitTextStroke: "2px white",
                          textStroke: "2px white", // For browsers that support it
                        }}
                      >
                        {project.id}
                      </h2>
                      <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                        {project.description}
                      </p>
                      <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4">
                        {project.stack?.map((item, index) => (
                          <li
                            key={index}
                            className="text-xs md:text-base text-lightSky/80"
                          >
                            {item}

                            {index !== project.stack.length - 1 && ","}
                          </li>
                        ))}
                      </ul>
                      {/* <Separator className="bg-gray-700" /> */}
                    </div>
                  </div>
                  <div className="w-full md:wi-1/2 order-1 md:order-2">
                    <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default Services;
