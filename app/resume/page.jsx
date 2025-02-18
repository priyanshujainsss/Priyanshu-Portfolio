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
        period: "Nov 2024 – Present",
        description: [
          "Spearheading the development of scalable and high-performance web applications using React, Next.js, and TypeScript.",
          "Leading a team of developers, ensuring efficient code reviews and best practices in front-end architecture.",
          "Collaborating with stakeholders to design and implement tailored solutions for business needs.",
          "Enhancing application performance and optimizing web solutions for better SEO and accessibility."
        ],
        highlights: [
          "React", 
          "Next.js", 
          "TypeScript", 
          "Team Leadership", 
          "Scalable Web Application Development",
          "Performance Optimization",
          "SEO and Accessibility Improvements"
        ]
      },
      {
        role: "React.js Developer",
        company: "Devstree IT Service Pvt. Ltd.",
        period: "Jan 2023 – Nov 2024",
        description: [
          "Developed and maintained dynamic single-page applications (SPA) using React.js and Next.js.",
          "Integrated third-party APIs and services to enhance functionality and user experience.",
          "Led front-end development efforts, ensuring code reusability and performance optimization.",
          "Worked closely with UI/UX designers to implement responsive and accessible interfaces."
        ],
        highlights: [
          "React", 
          "Next.js", 
          "TypeScript", 
          "API Integration", 
          "Performance Optimization", 
          "UI/UX Collaboration"
        ]
      },
      {
        role: "Associate Technology",
        company: "Publicis Sapient",
        period: "Nov 2021 – Dec 2022",
        description: [
          "Developed enterprise-level applications with React and Next.js, ensuring scalability and maintainability.",
          "Contributed to Agile development cycles, participating in sprint planning and daily stand-ups.",
          "Optimized front-end performance by implementing lazy loading, memoization, and server-side rendering (SSR).",
          "Worked with cross-functional teams to deliver high-quality solutions on time."
        ],
        highlights: [
          "React", 
          "Next.js", 
          "TypeScript", 
          "Enterprise-Level Application Development", 
          "Agile Methodology", 
          "Performance Optimization"
        ]
      },
      {
        role: "Software Engineer",
        company: "Source Soft Solutions Pvt. Ltd.",
        period: "Mar 2021 – Nov 2021",
        description: [
          "Built and maintained React applications, implementing modern front-end technologies.",
          "Designed reusable components and optimized front-end workflows for better efficiency.",
          "Collaborated with back-end developers to integrate APIs and enhance functionality.",
          "Provided technical support and mentorship to junior developers."
        ],
        highlights: [
          "React", 
          "Next.js", 
          "TypeScript", 
          "Component-Based Architecture", 
          "API Integration", 
          "Mentorship & Code Reviews"
        ]
      }
    ]
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
          "Proficient in building interactive, high-performance, and scalable front-end applications with modern frameworks and libraries.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Redux",
          "React Query"
        ]
      },
      {
        name: "Backend Development",
        description:
          "Experienced in designing and developing RESTful APIs, microservices, and backend solutions with scalable architectures.",
        skills: [
          "Node.js",
          "Express.js",
      
          "PostgreSQL",
          "MongoDB",
         
          "GraphQL"
        ]
      },
      {
        name: "Tools & DevOps",
        description:
          "Hands-on experience with development tools, cloud services, and deployment pipelines for efficient software delivery.",
        skills: [
          "Git",
          "Docker",
          "AWS",
          "CI/CD",
          "Jenkins",
          "Agile Methodologies",
          "JIRA"
        ]
      }
    ]
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
