import React from "react";
import Image from "next/image";

import LanguagueSelector from "../components/LanguageSelector";
import ThemeToggle from "../components/ThemeToggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen justify-around">
      <div className="w-[50%] min-h-screen flex flex-col items-center justify-around p-8">
        <ThemeToggle width="293" height="40"/>
        {children}
        <LanguagueSelector/>
      </div>
      <div className="w-[50%] bg-black rounded-l-[20px]">
        <Image
          className="w-full rounded-l-[20px] object-cover"
          src={"/images/login-img.png"}
          width={1000}
          height={150}
          alt="login-image"
        />
      </div>
    </div>
  );
}
