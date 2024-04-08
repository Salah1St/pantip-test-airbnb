"use client";

import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NotificationContextProvider from "./NotificationContext";
import ProtectedRoute from "@/guard/ProtectedRoute";

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
