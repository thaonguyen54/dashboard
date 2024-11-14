import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isTokenExpired } from "@/app/utils/validateJWT";

const withAuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("at")?.value;  

  if (!accessToken || isTokenExpired(accessToken)) {
    redirect("/login"); // Redirect to login page if no access token
  }

  return (
    <div>{children}</div>
  )
};

export default withAuthLayout;
