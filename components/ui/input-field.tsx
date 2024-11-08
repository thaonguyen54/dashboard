import React from "react";

interface InputFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  background?: string;
  border?: string;
}

const InputField = ({ icon, placeholder, type }: InputFieldProps) => {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-secondary-grey-dark">{icon}</span>
      <input
        className="w-full text-main bg-input border-input  text-base placeholder-secondary-grey-dark  p-2 pl-10 rounded-lg border focus:outline-none focus:border-2 focus:border-custom-green"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
