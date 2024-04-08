import React from "react";
interface props {
  className?: string;
  type?: "text" | "password";
  children: JSX.Element[];
  [key: string]: any;
}
function PrimaryInput({ className, type = "text", children, ...restProps }: props) {
  return (
    <input className={className ? `` : className} type={type} {...restProps}>
      {children}
    </input>
  );
}

export default PrimaryInput;
