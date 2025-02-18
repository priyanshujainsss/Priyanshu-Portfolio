import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import DevToolsBlocker from "@/components/DevToolBlocker";
import Head from "next/head";

const jetBrains = localFont({
  src: "./fonts/Jetbrains.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export const metadata = {
  title: "Priyanshu Jain | React & Next.js Developer",
  description:
    "Experienced React and Next.js developer with a strong background in building scalable, high-performance web applications.",
  openGraph: {
    title: "Priyanshu Jain | React & Next.js Developer | Portfolio",
    description:
      "Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 5+ years of experience. Discover projects, expertise, and innovative web solutions tailored for modern businesses.",
    url: "https://priyanshujain.vercel.app",
    siteName: "Priyanshu Jain | React & Next.js Developer",
    images: [
      {
        url: "https://priyanshujain.vercel.app/Priyanshu.webp", // Ensure this image exists at this URL
        width: 1200,
        height: 630,
        alt: "Priyanshu Jain - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Priyanshu Jain | Experienced React & Next.js Developer | Portfolio
        </title>
        <meta
          name="description"
          content="Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 4+ years of experience. View projects, expertise, and innovative web solutions tailored for modern businesses."
        />

        <meta property="og:url" content="https://priyanshujain.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Priyanshu Jain | Experienced React & Next.js Developer | Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 4+ years of experience. View projects, expertise, and innovative web solutions tailored for modern businesses."
        />
        <meta
          property="og:image"
          content="https://www.priyanshujain.vercel.app/Priyanshu.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="vth5tx13-3000.inc1.devtunnels.ms"
        />
        <meta
          property="twitter:url"
          content="https://priyanshujain.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Priyanshu Jain | Experienced React & Next.js Developer | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Priyanshu Jain, a skilled React and Next.js developer with 4+ years of experience. View projects, expertise, and innovative web solutions tailored for modern businesses."
        />
        <meta
          name="twitter:image"
          content="https://priyanshujain.vercel.app/Priyanshu.webp"
        />
      </Head>
      <body className={`${jetBrains.variable} antialiased`}>
        {/* <DevToolsBlocker/> */}
        <Header />

        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
