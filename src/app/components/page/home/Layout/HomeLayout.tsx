"use client";

import { ReactNode } from "react";
import HomeHeader from "./HomeHeader";
import HomeSideBar from "./HomeSideBar";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <HomeHeader />
      <div className="relative h-10 w-full flex grow ">
        <HomeSideBar />
        <div className="h-full grow overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
