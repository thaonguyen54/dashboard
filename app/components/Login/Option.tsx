"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "next-themes";
import React from "react";

const Option = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
        <Checkbox
          className={`${
            theme === "dark" ? "bg-[#1A1D21] " : "border-[#CDCECF]"
          }`}
        />
        <p
          className={`${
            theme === "dark" ? "text-[#6F767E]" : "text-[#CDCECF]"
          }`}
        >
          Remember Me
        </p>
      </div>
      <p className="font-bold bg-gradient-to-br from-[#82DBF7] to-[#B6F09C] bg-clip-text text-transparent cursor-pointer hover:underline">
        Forgot Password?
      </p>
    </div>
  );
};

export default Option;
