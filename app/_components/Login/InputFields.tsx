import React from "react";

import EmailIcon from "../Icons/EmailIcon";
import PasswordIcon from "../Icons/PasswordIcon";
import InputField from "@/components/ui/input-field";

import useAuthStore from "@/stores/authStore";

const InputFields = () => {
  const authStore = useAuthStore();
  
  const setEmail = (email: string) => {
    authStore.setAuth({ ...authStore.authData, email });
  }

  const setPassword = (password: string) => {
    authStore.setAuth({ ...authStore.authData, password });
  }
  
  return (
    <div className="flex flex-col gap-4">
      <InputField icon={<EmailIcon width="18" height="14" />} placeholder="Email" type="text" setInputValue={setEmail} />
      <InputField icon={<PasswordIcon width="14" height="16" />} placeholder="Password" type="password" setInputValue={setPassword} />
    </div>
  );
};

export default InputFields;
