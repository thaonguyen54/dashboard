import React from "react";
import LanguagueSelector from "../components/LanguageSelector";
import ThemeToggle from "../components/ThemeToggle";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen justify-around">
      {/* Left components */}
      <div className="w-[50%] min-h-screen flex flex-col items-center justify-around p-8">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Form */}
        {children}
        <LanguagueSelector />
      </div>
      {/* Right components */}
      <div className="w-[50%] bg-black">
        <Image
          className="w-full rounded-l-[16px] object-cover"
          src={"/images/login-img.png"}
          width={1000}
          height={150}
          alt="login-image"
        />
      </div>
    </div>
  );
}
