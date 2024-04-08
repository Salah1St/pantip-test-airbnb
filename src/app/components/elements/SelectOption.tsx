"use client";
import React, { DetailedHTMLProps, SelectHTMLAttributes, useEffect, useRef, useState } from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
  data: Option[];
  defaultValue?: string;
  isRequire?: boolean;
}

interface Option {
  name: string;
  value: string;
}

function SelectOption<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, classNameTitle, classNameInput, register, id, defaultValue = "", data = [], isRequire = false, formState } = props;
  const [value, setValue] = useState("");

  const overWriteOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    register?.(id).onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 pb-4">
      <p className={classNameTitle ? classNameTitle : "text-black text-base heading-xxs"}>
        {title}
        {isRequire ? <span className=" text-primary-error-400">{" *"}</span> : ""}
      </p>
      <label htmlFor={id} className={`w-full h-12 rounded-md bg-slate-100 border px-2 ${formState?.errors[id] ? "border-red-500" : "border-transparent"}`}>
        <select
          id={id}
          {...register?.(id)}
          onChange={(e) => overWriteOnChange(e)}
          defaultValue={defaultValue}
          className={
            classNameInput ? classNameInput : `w-full h-full bg-slate-100 outline-none border-none cursor-pointer ${value === defaultValue ? "text-slate-400" : "text-black"}`
          }
        >
          <option disabled value="">
            {placeHolder}
          </option>
          {data?.map((item: Option, id: number) => {
            return (
              <option key={id} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

export default SelectOption;
