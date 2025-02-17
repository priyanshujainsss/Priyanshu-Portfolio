// import { IconCloud } from "@/registry/magicui/icon-cloud";

import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  
  
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",

  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
         <IconCloud images={images} className="w-[100vw] h-[100vh] md:w-[100vw] md:h-[100vh]" />
    </div>
  );
}
