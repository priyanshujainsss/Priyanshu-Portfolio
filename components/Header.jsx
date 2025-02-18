"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navbarData } from "@/constants/navbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const pathName = usePathname();
  const [isSidebarOpen,setisSidebarOpen]=useState(false)
  return (
    <header className=" border-b border-b-hoverColor/50 bg-bodyColor text-white/80 sticky top-0 z-50">
      <Container className="py-10 flex ite justify-between ">
        <Logo title="Priyanshu" subTitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium ">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathName === item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}

              <span
                className={` w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0
                            group-hover:translate-x-0 hoverEffect 
                                ${
                                  pathName == item?.href
                                    ? "translate-x-0"
                                    : "-translate-x-[105%]"
                                }
                                
                                `}
              >
                {" "}
              </span>
            </Link>
          ))}
          <Link
            href={"/PriyanshuResume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire me
          </Link>
        </div>
        <button aria-label="Toggle-sdebar" onClick={()=>setisSidebarOpen(!isSidebarOpen)}  className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"><Menu/> </button>
      </Container>
      <div className="md:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={()=>setisSidebarOpen(false)} pathName={pathName} />
      </div>
    </header>
  );
};

export default Header;
