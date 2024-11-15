"use client"
import React from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import LightIcon from "./Icons/LightIcon";
import DarkIcon from "./Icons/DarkIcon";
import type { SizeProps, ThemeTypes } from "./types";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
}

const ThemeToggle = ({ width, height }: SizeProps) => {
  const { setTheme } = useTheme();
 
  const t = useTranslations("COMMON.THEME");
  
  const handleChangeTheme = (theme: ThemeTypes) => {
    setTheme(theme);
  }

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className={"flex rounded-xl bg-bg-toggle border-border-toggle items-center justify-center space-x-2 p-1 border  mx-5"}>
      <div
        onClick={() => handleChangeTheme(THEMES.LIGHT as ThemeTypes)}
        className="flex justify-center items-center w-full h-full rounded-lg cursor-pointer transition-transform duration-300 text-main bg-bg-left-item-toggle"
      >
        <LightIcon width="22" height="22" />
        <p className="ml-2 font-bold text-text-left-item-toggle" >{t("LIGHT")}</p>
      </div>
      <div
        onClick={() => handleChangeTheme(THEMES.DARK as ThemeTypes)}
        className={`flex justify-center items-center w-full h-full rounded-lg  cursor-pointer transition-transform duration-300 text-main bg-bg-right-item-toggle`}
      >
        <DarkIcon width="22" height="22"/>
        <p className="ml-2 font-bold text-text-right-item-toggle" >{t("DARK")}</p>
      </div>
    </div>
  );
};

export default ThemeToggle;