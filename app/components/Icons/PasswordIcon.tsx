import React from "react";
import type { SizeProps } from "../types";

const PasswordIcon = ({width, height}: SizeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7V5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM8 12V14M3 17H13C14.1046 17 15 16.1046 15 15V9C15 7.89543 14.1046 7 13 7H3C1.89543 7 1 7.89543 1 9V15C1 16.1046 1.89543 17 3 17Z"
        stroke="#686B6E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PasswordIcon;
