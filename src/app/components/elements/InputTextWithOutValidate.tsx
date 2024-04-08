"use client";
import React from "react";

interface props {
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  type?: "text" | "password";
  onChange?: () => void;
}

function InputTextWithOutValidate(props: props) {
  const { title, placeHolder, classNameTitle, classNameInput, type = "text", onChange } = props;

  //   =====================================> Render JSX <=====================================
  return (
    <div className="flex flex-col gap-2 ">
      <p className={classNameTitle ? classNameTitle : "text-white text-base font-semibold "}>{title}</p>
      <input
        onChange={() => onChange?.()}
        type={type}
        className={classNameInput ? classNameInput : `w-full h-11 rounded-xl px-5 `}
        placeholder={placeHolder ? placeHolder : ""}
      />
    </div>
  );
}

export default InputTextWithOutValidate;
