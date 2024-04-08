"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
interface props {
  url: string;
}
function Redirect({ url }: props) {
  const router = useRouter();
  useEffect(() => {
    router.push(url);
  }, []);

  return <div></div>;
}

export default Redirect;
