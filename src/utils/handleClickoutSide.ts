import { RefObject, useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
  const dropdownEl: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (dropdownEl.current && e.target instanceof Node && !dropdownEl.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback, dropdownEl]);

  return dropdownEl;
};
