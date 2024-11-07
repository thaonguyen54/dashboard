import React from "react";
import { IconProps } from "./types";

const DarkIcon = ({width, height}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.31567 3.02548C3.46318 4.28659 2.25 6.41147 2.25 8.81657C2.25 12.6826 5.38401 15.8166 9.25 15.8166C11.6551 15.8166 13.7799 14.6034 15.0411 12.7509C9.9317 12.1924 5.87421 8.13477 5.31567 3.02548ZM16.25 10.8166C17.116 10.8166 17.8618 11.5798 17.5191 12.3752C16.1398 15.5759 12.9566 17.8166 9.25 17.8166C4.27944 17.8166 0.25 13.7871 0.25 8.81657C0.25 5.10997 2.49067 1.92673 5.6914 0.54746C6.48674 0.20472 7.25 0.95051 7.25 1.81655C7.25 6.78712 11.2794 10.8166 16.25 10.8166Z"
        fill="#FCFCFC"
      />
    </svg>
  );
};

export default DarkIcon;
