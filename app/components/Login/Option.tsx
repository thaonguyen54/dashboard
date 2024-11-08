import React from "react";

import { Checkbox } from "@/components/ui/checkbox";

const Option = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2 font-medium text-base">
        <Checkbox color="#ff0" className="bg-primary-light border-primary-grey-light dark:bg-primary-dark dark:border-secondary-dark"/>
        <p className="text-secondary-grey-light dark:text-secondary-grey-dark">
          Remember Me
        </p>
      </div>
      <p className="font-bold text-base bg-gradient-to-br from-custom-aqua to-custom-green bg-clip-text text-transparent cursor-pointer hover:underline">
        Forgot Password?
      </p>
    </div>
  );
};

export default Option;
