"use client";

import { useAppDispatch } from "@/hooks/useRedux";
import { setDesktop, setMobile, setTablet, setViewport } from "@/redux/slice/mediaSlice";
import Spinner from "@element/Spinner";
import React, { Dispatch, FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, ToastContainerProps, toast } from "react-toastify";
interface NotificationContext {
  notify: (props: NotifyProp) => void;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}
interface NotificationProviderProps {
  children: ReactNode;
}
interface NotifyProp {
  message: string;
  type?: "info" | "success" | "warning" | "error";
}
const defaultToastOpts: ToastContainerProps = {
  position: "bottom-center",
  autoClose: 1500,
  hideProgressBar: true,
  newestOnTop: false,
  rtl: false,
  theme: "light",
};
const NotificationContext = createContext<NotificationContext | null>(null);
const NotificationContextProvider: FC<NotificationProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const notify = ({ message, type }: NotifyProp) => {
    switch (type) {
      case "info":
        toast.info(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warn(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  useEffect(() => {
    const location = window.location.pathname;

    const handleResize = () => {
      dispatch(setViewport(window.innerWidth));
      if (window.innerWidth > 1078) {
        dispatch(setDesktop(window.innerWidth));
      } else if (window.innerWidth < 640) {
        dispatch(setMobile(window.innerWidth));
      } else {
        dispatch(setTablet(window.innerWidth));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <NotificationContext.Provider value={{ notify, setLoading }}>
      <ToastContainer {...defaultToastOpts} />
      {loading && <Spinner />}
      {children}
    </NotificationContext.Provider>
  );
};
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
export default NotificationContextProvider;
