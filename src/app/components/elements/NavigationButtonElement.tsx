import React, { FC, ReactNode } from "react";

interface NavigationButtonElementProps {
  children: ReactNode;
}
const NavigationButtonElement: FC<NavigationButtonElementProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center text-white gap-4">
      <>{children}</>
    </div>
  );
};

export default NavigationButtonElement;
