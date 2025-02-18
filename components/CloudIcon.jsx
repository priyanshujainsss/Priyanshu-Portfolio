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
  <img src="/Priyanshu.jpg" alt="Background" className="absolute inset-0 w-full h-full object-contain rounded-[50%] brightness-[0.5]" />
  <div className="z-40">

  <IconCloud images={images} className="w-[100vw] h-[100vh] md:w-[100vw] md:h-[100vh] z-40" />
  </div>
</div>

  );
}
