import React, { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputFieldProps {
  className?: string;
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  background?: string;
  border?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  helperText?: string;
  setInputValue?: (value: string) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, icon, placeholder, type, setInputValue, error, helperText, ...props },ref) => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setInputValue) {
        setInputValue(e.target.value);
      }
    };

    return (
      <div>
        <div className={`relative flex items-center`}>
          <span className="absolute left-3 text-secondary-grey-dark">
            {icon}
          </span>
          <input
            className={`${className} text-main text-base p-2 pl-10 rounded-lg focus:outline-none focus:border-2 focus:border-custom-green`}
            type={type}
            onChange={handleChangeInput}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-red-600 mt-1">{helperText}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
