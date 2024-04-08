"use client";
import React, { useEffect, useRef, useState } from "react";
import icons from "@/asset/icons";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Image from "next/image";
import { useLocalization } from "@/hooks/useLocalization";

export interface OptionItem {
  id: number;
  valueEn: string;
  valueTh: string;
}
interface props {
  onChange: (target: OptionItem) => void;
  placeHolder: string;
  data: OptionItem[] | null;
  type?: "src" | "chain";
  icon?: boolean;
}

function Selection({ onChange, placeHolder, data, type = "src", icon = true }: props) {
  const { t } = useLocalization();
  const [value, setValue] = useState(placeHolder);
  const [show, setShow] = useState(false);
  const ref = useClickOutside(() => setShow(false));
  const [width, setWidth] = useState(0);
  const div1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (div1Ref.current) {
        setWidth(div1Ref.current.offsetWidth);
      }
    };
    updateWidth();
  }, [div1Ref.current?.offsetWidth]);
  const handleOnClick = (index: number) => {
    if (data) {
      const target = data[index];
      setValue(target[t("enum.select") as keyof OptionItem] as string);
      onChange(target);
    }
  };

  return (
    <div ref={ref} className={` relative w-[${width}px]  `} onClick={(e) => setShow((p) => !p)}>
      <div className={` flex justify-between gap-4 whitespace-nowrap  items-center ${data ? "hover:drop-shadow-primary cursor-pointer " : " text-slate-200"}  `}>
        {value}
        {icon && (
          <div className="p-1 aspect-square flex justify-center items-center rounded-full ">
            <Image src={icons.downVector} width={16} alt="" />
          </div>
        )}
      </div>
      {show && data && (
        <div ref={div1Ref} className="absolute z-[60] top-8 shadow-md flex flex-col  max-h-[200px] overflow-y-scroll  rounded-lg bg-white border border-slate-50 no-scrollbar p-1">
          {data.map((i, d) => (
            <div className="whitespace-nowrap backdrop-blur-md bg-(rgba(255,255,255,0.5))   p-2  hover:bg-slate-50 cursor-pointer" key={d} onClick={(e) => handleOnClick(d)}>
              {i[t("enum.select") as keyof OptionItem]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Selection;
