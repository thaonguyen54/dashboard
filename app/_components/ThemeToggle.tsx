"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import LightIcon from "./Icons/LightIcon";
import DarkIcon from "./Icons/DarkIcon";
import type { SizeProps, ThemeTypes } from "./types";

interface ThemeToggleProps extends SizeProps {
  isCollapsed?: boolean;
}

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
}

const ThemeToggle = ({ width, height, isCollapsed }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("COMMON.THEME");

  useEffect(() => {
    setMounted(true);
  })

  if (!mounted) return null;

  const handleChangeTheme = (theme: ThemeTypes) => {
    setTheme(theme);
  }

  const THEME_ICON = {
    dark: <DarkIcon width="22" height="22" />,
    light: <LightIcon width="22" height="22" />
  }

  const SWAP_THEME = {
    dark: THEMES.LIGHT,
    light: THEMES.DARK
  }

  const COLLAPSE_CONTENT = {
    true: (
      <div style={{ width: `${width}`, height: `${height}` }} className={`flex rounded-xl bg-bg-toggle border-border-toggle items-center justify-center space-x-2 p-1 border  mx-5`}>
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
    ),
    false: (
      <div style={{ width: `${width}`, height: `${height}` }} className={`flex rounded-3xl bg-bg-toggle border-border-toggle items-center justify-center space-x-2 p-1 border  mx-5`}>
        <div
          onClick={() => handleChangeTheme(SWAP_THEME[theme as ThemeTypes] as ThemeTypes)}
          className="flex justify-center items-center w-full h-full rounded-full cursor-pointer transition-transform duration-300 text-main bg-bg-toggle-collapse"
        >
          {THEME_ICON[theme as ThemeTypes]}
        </div>
      </div>
    )
  }

  return (
    COLLAPSE_CONTENT[`${isCollapsed || false}`]
  );
};

export default ThemeToggle;