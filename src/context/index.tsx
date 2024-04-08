"use client";

import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NotificationContextProvider from "./NotificationContext";

function ContextComponents({ children }: { children: ReactElement }) {
  return (
    <>
      <Provider store={store}>
        <NotificationContextProvider>{children}</NotificationContextProvider>
      </Provider>
    </>
  );
}
export default ContextComponents;
