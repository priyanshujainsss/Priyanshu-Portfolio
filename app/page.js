import { IconCloudDemo } from "@/components/CloudIcon";
import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statstistics from "@/components/Statstistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Priyanshu Jain | Experienced React & Next.js Developer | Portfolio",
  description: "Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 4+ years of experience. View projects, expertise, and innovative web solutions tailored for modern businesses.",
  openGraph: {
    title: "Priyanshu Jain | Experienced React & Next.js Developer | Portfolio",
    description: "Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 4+ years of experience. View projects, expertise, and innovative web solutions tailored for modern businesses.",
    url: "https://www.priyanshu.vercel.app",
    siteName: "Priyanshu Jain | React & Next.js Developer",
    images: [
      {
        url: "https://www.priyanshu.vercel.app/Priyanshu.jpg", // Use the absolute URL
        width: 1200,
        height: 630,
        alt: "Priyanshu Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className={"py-10 grid grid-cols-1 md:grid-cols-2 gap-10"}>
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
            Full-Stack Developer | React & Next.js Expert
            </h3>
            <h2 className="text-3xl md:text-5xl text-white mb-2">
              Hello i&apos;m
            </h2>
            <h1 className="text-5xl md:text-6xl text-lightSky tracking-normal">
              Priyanshu Jain
            </h1>
          </div>
          <div className="w-full h-[375px] lg:h-[180px] md:h-[264px] sm:h-[170px] xs:h-[207px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>

          <a href="/Priyanshu Jain.pdf" download="Priyanshu_Jain.pdf">
            <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect">
              Download CV <Download />
            </Button>
          </a>

          <SocialLinks />
          <Statstistics />

        </div>

        <IconCloudDemo />
        {/* <Photo /> */}
      </Container>
    </div>
  );
}
