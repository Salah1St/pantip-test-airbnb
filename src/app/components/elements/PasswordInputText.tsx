"use client";

import { useState } from "react";

import Image from "next/image";
import icons from "@/asset/icons";

interface props {
  content: string;
  disabled?: boolean;
}

function PasswordInputText({ content, disabled = false }: props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex gap-2 items-center relative">
      <input disabled={disabled} type={passwordVisible ? "text" : "password"} value={content} className="text-xl border rounded-lg px-2 py-1" />
      <span className="absolute right-2" onClick={togglePasswordVisibility}>
        {passwordVisible ? <Image src={icons.eyeOpen} width={20} alt="" /> : <Image src={icons.eyeClose} width={20} alt="" />}
      </span>
    </div>
  );
}

export default PasswordInputText;
