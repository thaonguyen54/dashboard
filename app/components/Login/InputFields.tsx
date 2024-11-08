import React from "react";

import EmailIcon from "../Icons/EmailIcon";
import PasswordIcon from "../Icons/PasswordIcon";
import InputField from "@/components/ui/input-field";

const InputFields = () => {
  return (
    <div className="flex flex-col gap-4">
      <InputField icon={<EmailIcon width="18" height="14" />} placeholder="Email" type="text" />
      <InputField icon={<PasswordIcon width="14" height="16" />} placeholder="Password" type="password"/>
    </div>
  );
};

export default InputFields;
