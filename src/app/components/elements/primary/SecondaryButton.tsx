import React, { ReactNode } from "react";

interface props {
  id?: string;
  form?: string;
  children: string | ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function SecondaryButton({ id, className, children, type = "button", form, onClick }: props) {
  const defaultButtone = "";
  return (
    <button
      id={id}
      className={className ? className : "text-primary-brand-400 whitespace-nowrap rounded-lg bg-primary-brand-200 hover:shadow-lg active:scale-95 px-4 py-2"}
      type={type}
      form={form}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
