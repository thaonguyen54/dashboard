import React from "react";

import EmailIcon from "../Icons/EmailIcon";
import PasswordIcon from "../Icons/PasswordIcon";

const InputFields = () => {

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center">
        <span className="absolute left-3 text-secondary-grey-dark">
          <EmailIcon width="18" height="14" />
        </span>
        <input
          className="w-full text-main bg-input border-input  text-base placeholder-secondary-grey-dark  p-2 pl-10 rounded-md border  focus:outline-none focus:ring-2 focus:bg-gradient- from-[#82DBF7] to-[#B6F09C] focus:border-transparent"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="relative flex items-center">
        <span className="absolute left-3 text-secondary-grey-dark">
          <PasswordIcon width="14" height="16"/>
        </span>
        <input
          className="w-full text-main bg-input border-input text-base placeholder-secondary-grey-dark p-2 pl-10 rounded-md border"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default InputFields;
