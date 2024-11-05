"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevents flashing
    setMounted(true);
    if (!theme) {
      setTheme("light"); //Set default theme
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div className={`flex items-center justify-center space-x-2 p-1  ${theme ==='dark' ? 'bg-[#1A1D21] border-[#1A1D21]' : 'bg-[#F4F4F4] border-[#F4F4F4]'}  rounded-xl border  mx-5`}>
      <div
        onClick={() => setTheme("light")}
        className={`flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
          theme === "dark" ? " text-black" : "bg-[#FCFCFC] text-white"
        }`}
      >
        <Image
          src={"/icons/light-icon.png"}
          className={`${theme === 'light' ? 'filter-black' : ''}`}
          width={20}
          height={20}
          alt="light-mode"
        />
        <p className={`ml-2 font-plusJakaraSans ${theme === 'light' ? 'text-black' : ''} text-[#6F767E] font-bold`}>Light</p>
      </div>
      <div
        onClick={() => setTheme("dark")}
        className={`flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
          theme === "dark" ? "bg-[#2D3136] text-white" : " text-[#6F767E]"
        }`}
      >
        <Image
          src={"/icons/dark-icon.png"}
          className={`${theme === 'light' ? 'filter-custom-color' : ''}`}
          width={20}
          height={20}
          alt="dark-mode"
        />
        <p className={`ml-2 font-plusJakaraSans ${theme === 'dark' ? 'text-white' : ''} font-bold`}>Dark</p>
      </div>
    </div>
  );
};

export default ThemeToggle;