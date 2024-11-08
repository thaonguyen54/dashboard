"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import LightIcon from "./Icons/LightIcon";
import DarkIcon from "./Icons/DarkIcon";
import type { SizeProps, ThemeTypes } from "./types";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
}

const ThemeToggle = ({ width, height }: SizeProps) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const handleChangeTheme = (theme: ThemeTypes) => {
    setTheme(theme);
  }

  useEffect(() => {
    setMounted(true);
  },[]);  

  if (!mounted) return null;

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className={`flex rounded-xl bg-bg-toggle border-border-toggle items-center justify-center space-x-2 p-1 border  mx-5`}>
      <div
        onClick={() => handleChangeTheme(THEMES.LIGHT as ThemeTypes)}
        className="flex justify-center items-center w-full h-full rounded-lg cursor-pointer transition-transform duration-300 text-main bg-bg-left-item-toggle"
      >
        <LightIcon width="22" height="22" />
        <p className="ml-2 font-bold text-text-left-item-toggle" >Light</p>
      </div>
      <div
        onClick={() => handleChangeTheme(THEMES.DARK as ThemeTypes)}
        className={`flex justify-center items-center w-full h-full rounded-lg  cursor-pointer transition-transform duration-300 text-main bg-bg-right-item-toggle`}
      >
        <DarkIcon width="22" height="22"/>
        <p className="ml-2 font-bold text-text-right-item-toggle" >Dark</p>
      </div>
    </div>
  );
};

export default ThemeToggle;