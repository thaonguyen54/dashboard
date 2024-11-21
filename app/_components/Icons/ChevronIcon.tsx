import React from "react";
import type { SizeProps } from "../types";

interface ArrowIconProps extends SizeProps {
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
}

const ARROW_DIRECTION = {
  UP: function JsxElement({width, height}: SizeProps){
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  DOWN: function JsxElement({width, height}: SizeProps){
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  LEFT: function JsxElement({width, height}: SizeProps){
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.707 0.293C6.51947 0.105529 6.26516 0.000213623 6 0.000213623C5.73484 0.000213623 5.48053 0.105529 5.293 0.293L0.293 5.293C0.105529 5.48053 0.000213623 5.73484 0.000213623 6C0.000213623 6.26516 0.105529 6.51947 0.293 6.707L5.293 11.707C5.4816 11.8892 5.7342 11.99 5.9964 11.9877C6.2586 11.9854 6.50941 11.8802 6.69482 11.6948C6.88023 11.5094 6.9854 11.2586 6.98767 10.9964C6.98995 10.7342 6.88916 10.4816 6.707 10.293L2.414 6L6.707 1.707C6.89447 1.51947 6.99979 1.26516 6.99979 1C6.99979 0.734836 6.89447 0.480528 6.707 0.293Z"
          fill="#FFFF"
          className="fill-main"
        />
      </svg>
    );
  },
  RIGHT: function JsxElement({width, height}: SizeProps){
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.29297 0.293C0.480497 0.105529 0.734805 0.000213623 0.999969 0.000213623C1.26513 0.000213623 1.51944 0.105529 1.70697 0.293L6.70697 5.293C6.89444 5.48053 6.99976 5.73484 6.99976 6C6.99976 6.26516 6.89444 6.51947 6.70697 6.707L1.70697 11.707C1.51837 11.8892 1.26577 11.99 1.00357 11.9877C0.741371 11.9854 0.490559 11.8802 0.305151 11.6948C0.119743 11.5094 0.0145741 11.2586 0.0122957 10.9964C0.0100174 10.7342 0.110812 10.4816 0.29297 10.293L4.58597 6L0.29297 1.707C0.105499 1.51947 0.000183105 1.26516 0.000183105 1C0.000183105 0.734836 0.105499 0.480528 0.29297 0.293Z"
          fill="#FFFF"
          className="fill-main"
        />
      </svg>
    );
  }
};

const ChevronIcon = ({ width, height, direction }: ArrowIconProps) => {
  return ARROW_DIRECTION[direction]({ width, height });
};

export default ChevronIcon;
