import { useClickOutside } from "@/utils/handleClickoutSide";
import React, { Dispatch, FC, SetStateAction, createContext, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface DropDownContext {}
const DropDownContext = createContext<DropDownContext | null>(null);

interface DropDownProp {
  children?: JSX.Element;
  button?: JSX.Element;
  onClose?: () => void;
  showDropDown: boolean;
  setShowDropDown: Dispatch<SetStateAction<boolean>>;
}

const DropDown: FC<DropDownProp> = ({ children, button, showDropDown, setShowDropDown, onClose }) => {
  const handleClickOutside = () => {
    setShowDropDown(false);
    if (onClose) onClose();
  };
  const clickOutside = useClickOutside(handleClickOutside);

  return (
    <DropDownContext.Provider value={{}}>
      <div ref={clickOutside} className="relative">
        <div onClick={() => setShowDropDown((p) => !p)}>
          {button ? button : <GiHamburgerMenu className="text-white w-[32px] h-[32px] cursor-pointer hover:text-slate-200 active:text-slate-300" />}
        </div>
        <div
          className={`absolute top-10 right-1/2 overflow-hidden min-[450px]:right-0 w-[80dvw] sm:w-fit  min-w-[80dvw] min-[450px]:min-w-[200px] h-fit min-h-[120px] rounded-lg bg-white border border-slate-50 shadow-sm ${
            !showDropDown && "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </DropDownContext.Provider>
  );
};

export const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};

export default DropDown;
