import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";

interface props {
  className?: string;
  children?: ReactNode;
  button?: ReactNode;
  outSideClose?: boolean;
  headless?: boolean;
  closeIcons?: boolean;
  isTable?: boolean;
  title?: ReactNode;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
const ModalComponents = ({ children, className, closeIcons, headless, outSideClose = true, button = <p>ModalOpen</p>, isTable = false, title, show, setShow }: props) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <>
      {isTable ? (
        <tr className="text-center border-t" onClick={() => setShow((p) => !p)} role="button">
          {button}
        </tr>
      ) : (
        <div role="button" className="w-fit h-fit" onClick={() => setShow((p) => !p)}>
          {button}
        </div>
      )}

      {show ? (
        <div className="fixed top-0 left-0 h-screen w-screen z-[50]">
          <div
            onClick={() => {
              if (outSideClose) setShow(false);
            }}
            className="relative h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] p-4 "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`min-[450px]:absolute top-1/2 left-1/2 min-[450px]:-translate-x-1/2 min-[450px]:-translate-y-1/2 flex flex-col items-center gap-5  ${
                className ? className : "p-6 bg-white rounded-2xl "
              }`}
            >
              <ModalComponents.Header setShow={setShow} closeIcons={closeIcons ?? true} headless={headless ?? false} title={title ?? <></>} />
              <div className="max-h-[80vh] max-w-[90vw]  overflow-y-scroll scrollbar-none bg-white">{children}</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
interface HeaderProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  isCross?: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  closeIcons: boolean;
  headless: boolean;
}
ModalComponents.Header = function Header(props: HeaderProps) {
  return (
    <>
      {!props.headless ? (
        <div className="relative h-[10%] w-full flex justify-start items-center ">
          <div>{props.title}</div>
          {props.closeIcons ? (
            <HiMiniXMark
              onClick={() => props.setShow(false)}
              role="button"
              className={"absolute right-[-15px] top-[-15px] w-8 h-8 rounded-full hover:bg-slate-100 active:bg-slate-200"}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default ModalComponents;
