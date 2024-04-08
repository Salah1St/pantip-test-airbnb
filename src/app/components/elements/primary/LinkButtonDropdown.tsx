"use client";
import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface props {
  path: string;
  title: string;
  children?: JSX.Element[];
}
function LinkButtonDropdown({ path, title, children }: props) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [here, setHere] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    if (!pathname.includes(path)) {
      setShow(false);
      setHere(false);
    } else {
      setHere(true);
    }
  }, [pathname, path]);

  return (
    <div className={`flex  flex-col px-2 py-1 ${show ? "gap-2" : ""}`}>
      <button className="w-full flex items-center gap-2 px-2 py-1 text-black   hover:text-primary-brand-400 cursor-pointer">
        <div className="h-full aspect-square flex justify-center items-center rounded-full hover:bg-slate-200 active:scale-95" onClick={() => setShow((p) => !p)}>
          {!show ? <Image height={12} src={icons.moreThan} alt="" /> : <Image className=" rotate-90" height={12} src={icons.moreThan} alt="" />}
        </div>
        <Link href={path} role="button" className={`font-bold flex grow items-center active:scale-95 ${here ? "underline" : ""}`} onClick={handleClick}>
          {title}
        </Link>
      </button>
      <>
        {children &&
          new Array(children?.length).fill(0).map((i, d) => (
            <div key={d} className={` ${show ? "pl-2" : "animate-fade-out-display "}`}>
              {children[d]}
            </div>
          ))}
      </>
      {/* <div className={` ${show ? "animate-feed-display" : "hidden"}`}>{children}</div> */}
      {/* {show ? children : <></>} */}
    </div>
  );
}

export default LinkButtonDropdown;
