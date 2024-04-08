("use Client");
import ChevronRight from "@/asset/icons/ChevronRight";
import Image from "next/image";
import React from "react";

function RoomCarousel({ children }: { children?: JSX.Element[] }) {
  return (
    <div className="relative w-2/3 whitespace-nowrap overflow-x-scroll no-scrollbar shadow-inner">
      {children}
      {/* <div className="fixed top-1/2 right-0 h-full w-20  -translate-y-1/2  flex justify-center items-center bg-gradient-to-r from-transparent via-white">
        <ChevronRight className="cursor-pointer" size="12px" />
      </div> */}
    </div>
  );
}
export default RoomCarousel;
