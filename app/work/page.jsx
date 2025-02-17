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
import Project1 from "@/images/Project1.jpg"
import Project2 from "@/images/Project2.jpeg"

const projects = [
  {
    id: "01",
    title: "Garage Service",
    category: "Full Stack",
    description: "djbfjdfndf,d f",
    stack: ["Next.js", "Tailwind CSS", "Stripe", "Mongodb"],
    image:    Project1,
    liveUrl: "https://apexautoapp.com",
  },
  {
    id: "02",
    title: "NGO website",
    category: "Frontend",
    description: "djbfjdfndf,d f",
    stack: ["Next.js", "Tailwind CSS"],
    image:
    Project2,
    liveUrl: "https://www.ainsvf.org/",
  },
];
const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-6 md:py-12 text-white">
      <PageLayout>
        <div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            onSelect={() => {
              const index = 0;
              if (typeof index == "number") handleSlideChange(index);
            }}
          >
            <CarouselContent>
              {projects?.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="bg-bodyColor border-lightSky/20">
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
                              {project.category} project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                              {project.title}
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
                            <Separator className="bg-gray-700" />
                            <div>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect hover:bg-lightSky/10"
                                    >
                                      <Link
                                        href={project?.liveUrl}
                                        target="_blank"
                                      >
                                        <ArrowUpRight />{" "}
                                        <span className="sr-only">
                                          View Live Project
                                        </span>
                                      </Link>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>View Live Project</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:wi-1/2 order-1 md:order-2">
                          <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src={project?.image }
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-10 -bottom-8">
              <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20  hover:text-white hover:border-hoverColor p-5 hoverEffect" />
              <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20  hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            </div>
          </Carousel>
        </div>
      </PageLayout>
    </div>
  );
};

export default Work;
