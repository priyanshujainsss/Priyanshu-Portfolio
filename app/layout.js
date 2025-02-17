import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import DevToolsBlocker from "@/components/DevToolBlocker";

const jetBrains = localFont({
  src: "./fonts/Jetbrains.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export const metadata = {
  title: "Priyanshu Jain | Web Developer",
  description: "Priyanshu Jain developer",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
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
