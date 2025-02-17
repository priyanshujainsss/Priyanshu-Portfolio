"use client";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
const buttons = [
  {
    title: "Experience",
    icon: Briefcase,
    value: "experience",
  },
  {
    title: "Education",
    icon: GraduationCap,
    value: "education",
  },
  {
    title: "Skills",
    icon: Code,
    value: "skills",
  },
  {
    title: "About me",
    icon: User,
    value: "aboutme",
  },
];
const buttonsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Solution Engineer",
        company: "Gammastack",
        period: "Nov-2024 - Present",
        description: "sdsds",
        highlights: ["React", "Next Js", "Typescript", "Team Leadership"],
      },
      {
        role: "React Js Developer",
        company: "Devstree IT Service Pvt. Ltd.",
        period: "Jan-2023 - Nov-2024",
        description: "sdsds",
        highlights: ["React", "Next Js", "Typescript", "Team Leadership"],
      },
      {
        role: "Associate Technology",
        company: "Publicis Sapient",
        period: "Nov-2021 - Dec-2022",
        description: "sdsds",
        highlights: ["React", "Next Js", "Typescript", "Team Leadership"],
      },
      {
        role: "Software Engineer",
        company: "Source Soft Solutions Pvt. Ltd.",
        period: "Mar-2021 - Nov-2024",
        description: "sdsds",
        highlights: ["React", "Next Js", "Typescript", "Team Leadership"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor of Computer Science",
        institute: "Dr. APJ Abdul Kalan]m Technical University",
        period: "2017 - 2021",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievments: [
          "8.6 GPA",
          "Academic Excellence Award",
          "Programming Club Lead",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",

        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        skills: [
          "React",
          "Next.js",
          "Typescript",
          "taoilwind CSS",
          "Framer motion",
        ],
      },
      {
        name: "Backend Development",

        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        skills: [
          " Node.js",
          "    Express",
          " Python",
          " PostgreSQL",
          "MongoDB",
        ],
      },
      {
        name: "Tools & Others",

        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
  aboutme: {
    title: "About Priyanshu Jain",
    bio: "Passionate software developer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "  Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["English", "Hindi"],
  },
};
const ResumePage = () => {
  return (
    <div className={"flex flex-col justify-center py-10"}>
      <PageLayout>
        {/* <Container
     
            > */}
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10 "
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4 flex-wrap sm:flex-nowrap">
            {buttons?.map((item) => (
              <TabsTrigger
                key={item?.title}
                value={item.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs  sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />

                  {item.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="experience" className="flex-1 min-h-[400px]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold mb-6 text-lightSky"
            >
              {buttonsContent?.experience?.title}
            </motion.h2>
            <div className="space-y-6 text-white">
              {buttonsContent?.experience?.items?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,

                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{item?.role}</h3>
                      <p className="text-muted-foreground">{item?.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item?.period}
                    </div>
                  </div>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights?.map((highlight, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education" className="flex-1 min-h-[400px]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold mb-6 text-lightSky"
            >
              {buttonsContent?.education?.title}
            </motion.h2>
            <div className="space-y-6 text-white">
              {buttonsContent?.education?.items?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,

                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{item?.degree}</h3>
                      <p className="text-muted-foreground">{item?.institute}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item?.period}
                    </div>
                  </div>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievments?.map((achievment, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {achievment}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills" className="flex-1 min-h-[400px]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold mb-6 text-lightSky"
            >
              {buttonsContent?.skills?.title}
            </motion.h2>
            <div className="space-y-6 text-white">
              {buttonsContent?.skills?.categories?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,

                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{item?.name}</h3>
                      {/* <p className="text-muted-foreground">{item?.institute}</p> */}
                    </div>
                    {/* <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item?.period}
                    </div> */}
                  </div>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills?.map((skill, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="aboutme" className="flex-1 min-h-[400px]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold mb-6 text-lightSky"
            >
              {buttonsContent?.aboutme?.title}
            </motion.h2>
            <div className="space-y-6 text-white">
              {/* {buttonsContent?.aboutme?.categories?.map((item, index) => ( */}
                <motion.div
                  // key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,

                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                 
                  <p className="mb-4">{buttonsContent?.aboutme.bio}</p>
                  <h3 className="mb-4"> Interests</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {buttonsContent?.aboutme.interests?.map((interest, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-4"> Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {buttonsContent?.aboutme.languages?.map((language, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {language}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              {/* // ))} */}
            </div>
          </TabsContent>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
