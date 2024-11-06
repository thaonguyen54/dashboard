"use client"
import { useTheme } from "next-themes";
import React from "react";

const Heading = () => {
  const { theme } = useTheme();

  return (
    <div className="mb-12">
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-4xl`}
      >
        Hello,{" "}
        <span className="font-bold bg-gradient-to-br from-custom-blue via-custom-aqua to-custom-green bg-clip-text text-transparent">
          Digital Fortress
        </span>
      </p>
      <p className="text-lg mt-6 text-[#6F767E]">
        Login to platform to start creating magic
      </p>
    </div>
  );
};

export default Heading;
