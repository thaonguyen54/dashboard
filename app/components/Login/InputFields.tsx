"use client"
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const InputFields = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center">
        <span className="absolute left-3 text-[#6F767E]">
          <Image
            src="/icons/email-icon.png"
            width={20}
            height={20}
            alt="email-icon"
          />
        </span>
        <input
          className={`${
            theme === "dark"
              ? "bg-[#1A1D21] border-[#1A1D21] text-white "
              : "bg-[#F4F4F4] border-[#F4F4F4] text-[#1A1D1F]"
          } w-full text-base placeholder-[#6F767E]  p-2 pl-10 rounded-md border  focus:outline-none focus:ring-2 focus:bg-gradient- from-[#82DBF7] to-[#B6F09C] focus:border-transparent`}
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="relative flex items-center">
        <span className="absolute left-3 text-[#6F767E]">
          <Image
            src="/icons/password-icon.png"
            width={20}
            height={20}
            alt="password-icon"
          />
        </span>
        <input
          className={`${
            theme === "dark"
              ? "bg-[#1A1D21] border-[#1A1D21] text-white "
              : "bg-[#F4F4F4] border-[#F4F4F4] text-[#1A1D1F]"
          } w-full text-base placeholder-[#6F767E] p-2 pl-10 rounded-md border border-[#1A1D21]`}
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default InputFields;
