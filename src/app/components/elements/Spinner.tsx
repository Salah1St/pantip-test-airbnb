import React, { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

function Spinner() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center  bg-[rgba(0,0,0,0.3)] backdrop-blur-[1px] z-[100]">
      <CgSpinner className={` w-10 h-10 text-teal-100 animate-spin`} />
    </div>
  );
}

export default Spinner;
