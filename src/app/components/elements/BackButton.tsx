"use client";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const route = useRouter();
  return (
    <div className="w-20 h-12 flex justify-center items-center">
      <button className=" text-white  bg-primary-brand-300 rounded-lg shadow-sm  hover:shadow-lg active:shadow-inner px-4 py-2" type="button" onClick={() => route.back()}>
        back
      </button>
    </div>
  );
}

export default BackButton;
