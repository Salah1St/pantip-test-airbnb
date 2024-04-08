"use client";
import React from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  type?: "text" | "password";
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
  isRequire?: boolean;
}

function InputText<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, classNameTitle, classNameInput, type = "text", register, formState, id, isRequire = false } = props;
  //   =====================================> Render JSX <=====================================
  return (
    <div className="relative flex flex-col gap-2 pb-4">
      <p className={classNameTitle ? classNameTitle : "text-black text-base heading-xxs"}>
        {title}
        {isRequire ? <span className=" text-primary-error-400">{" *"}</span> : ""}
      </p>
      <input
        id={id}
        {...register?.(id)}
        type={type}
        className={`w-full h-12 rounded-md outline-primary-brand-400 px-5 text-base bg-slate-100 ${
          formState?.errors?.[id] ? "border border-primary-error-400 outline-primary-error-400" : ""
        } ${classNameInput ? classNameInput : ""}`}
        placeholder={placeHolder ? placeHolder : ""}
      />

      <p
        className={`absolute bottom-0 h-4  px-2 text-error text-xs font-extralight bg-white rounded-b-xl rounded-tr-xl  ${
          formState?.errors?.[id] ? "border border-primary-error-400 border-t-0" : "invisible"
        }`}
      >
        {`${formState?.errors?.[id]?.message ?? " "}`}
      </p>
    </div>
  );
}

export default InputText;
