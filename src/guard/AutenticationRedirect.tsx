"use client";

import { ReactElement, FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Role } from "@/model/enum";
import { getAccessToken } from "@/utils/localStroage";
import { useAppSelector } from "@/hooks/useRedux";
interface AutenticationRedirectProps {
  children: ReactElement;
}
const AutenticationRedirect: FC<AutenticationRedirectProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthen } = useAppSelector((state) => state.user);
  const token = getAccessToken();

  useEffect(() => {
    if (isAuthen) {
      if (isAuthen?.role === Role.ADMIN) {
        // in page Login
        router.push("/admin");
      } else if (isAuthen?.role === Role.CLIENT) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
  }, [isAuthen, router]);
  // entry page with token
  if (token) {
    return null;
  } else {
    return children;
  }
};

export default AutenticationRedirect;
