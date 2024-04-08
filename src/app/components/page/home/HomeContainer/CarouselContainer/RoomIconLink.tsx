"use client";
import Tooltip from "@element/Tooltip";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface props {
  title: string;
  src: string;
  description: string;
  path: string;
}
function RoomIconLink({ title, src, description, path }: props) {
  const pathname = usePathname().split("/").slice(1);
  let path_origin = "";
  if (typeof window !== "undefined") {
    path_origin = window.location.origin;
  }
  const [hover, setHover] = useState(false);
  const [pathCorrect, setPath] = useState(false);

  useEffect(() => {
    if (pathname.includes(path)) {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [pathname, path]);

  return (
    <Link href={`/home/${path}`} className="relative inline-block  w-24 h-24 mx-4 p-2 cursor-pointer">
      <div
        className="w-full h-full flex flex-col  justify-center items-center cursor-pointer"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <Image className=" invert " src={src} alt="" height={24} width={24}></Image>
        <div>{title}</div>
        <div className={`w-full h-1 rounded-xl ${pathCorrect ? "bg-primary-brand-400" : ""} ${hover ? "bg-primary-brand-200" : ""}`}></div>
      </div>
      {hover ? <Tooltip message={description}></Tooltip> : <></>}
    </Link>
  );
}
export default RoomIconLink;
