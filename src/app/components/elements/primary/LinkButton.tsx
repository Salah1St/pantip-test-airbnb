"use client";
import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface props {
  path: string;
  title: string;
  disable?: boolean;
}
function LinkButton({ path, title, disable = false }: props) {
  const [choose, setChoose] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes(path)) {
      setChoose(false);
    } else {
      setChoose(true);
    }
  }, [pathname, path]);

  return (
    <>
      {disable ? (
        <button className="w-full flex gap-4 px-2 py-1 text-slate-400   cursor-default">
          <Image className="invisible" height={12} src={icons.moreThan} alt="" />
          <div className="text-sm font-semibold flex grow items-center ">{title}</div>
        </button>
      ) : (
        <button className="w-full flex gap-4 px-2 py-1 text-black   hover:text-primary-brand-400 cursor-pointer " onClick={() => setChoose(true)}>
          <Image className="invisible" height={12} src={icons.moreThan} alt="" />
          <Link href={path} role="button" className={`text-sm font-semibold flex grow items-center active:scale-95  ${choose ? "text-primary-brand-400" : ""}`}>
            {title}
          </Link>
        </button>
      )}
    </>
  );
}

export default LinkButton;
