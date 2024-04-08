"use client";
import { FC, ReactNode, createContext, useContext } from "react";

interface HomeProviderProps {
  children: ReactNode;
}

interface HomeContext {}

const HomeContext = createContext<HomeContext | null>(null);
const HomeContextProvider: FC<HomeProviderProps> = ({ children }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeContextProvider");
  }
  return context;
};
export default HomeContextProvider;
