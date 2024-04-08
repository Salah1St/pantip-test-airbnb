import HomeContextProvider from "@/context/HomeContext";
import HomeLayout from "@components/page/home/Layout/HomeLayout";

import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <HomeContextProvider>
      <HomeLayout>{children}</HomeLayout>
    </HomeContextProvider>
  );
}

export default DashboardLayout;
