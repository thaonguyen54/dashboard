import React from "react";
import { IconProps } from "./types";

const VietnameseIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_4553)">
        <path
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="#D80027"
        />
        <path
          d="M16 8.34781L17.7268 13.6621H23.3146L18.7939 16.9465L20.5207 22.2609L16 18.9764L11.4794 22.2609L13.2062 16.9465L8.68555 13.6621H14.2733L16 8.34781Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_4553">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VietnameseIcon;
