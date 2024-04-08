import { useAppSelector } from "@/hooks/useRedux";
import { Skeleton } from "@components/ui/skeleton";
import React from "react";

interface props {
  children: JSX.Element | JSX.Element[];
  ratio: "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "100%";
}
function Block({ ratio, children }: props) {
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);

  const amount = Array.isArray(children) ? children.length : 1;
  return (
    <div
      style={{ gridTemplateColumns: ratio === "100%" || dashboardSize < 640 ? "repeat(1, minmax(0, 1fr))" : `${ratio} 1fr` }}
      className={`relative w-full grid gap-4   overflow-hidden min-h-[300px]  ${dashboardSize > 640 ? `h-[300px]` : `h-[${300 * amount}px] grid-cols-1 grid-rows-${amount}`}`}
    >
      {children}
      {!dashboardSize && (
        <div className={`absolute top-0 left-0 h-full  w-full overflow-hidden z-50 bg-slate-50`}>
          <Skeleton className="w-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}

export default Block;
