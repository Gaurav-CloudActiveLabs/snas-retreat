'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (id: string, value: string) => void;
  label: string;
  id: string;
  value: string | null;
  required?: boolean;
  error?: string;
  validateOnBlur?: boolean;
  onBlur?: () => void;
  generalError?: string;
  readOnly?: boolean;
}

const InputWithFocus = ({
  type,
  placeholder,
  onChange,
  label,
  id,
  value,
  required,
  error,
  validateOnBlur = false,
  onBlur,
  generalError,
  readOnly = false,
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    setTouched(true);
    if (onBlur) {
      onBlur();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(id, newValue);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="relative">
      <div className="flex relative w-full flex-col gap-3">
        <label
          htmlFor={id}
          className={`block text-base cursor-pointer font-medium mb-1 ${
            focused ? 'text-[#747579]' : 'text-[#87898E]'
          }`}
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      </div>
      <div
        className={`border-[1.5px] p-2 px-5 py-3 w-full placeholder-[#23262F] text-[#23262F] bg-white  outline-none rounded-md  border-[#BCBCBC] ${
          focused ? 'border-[1.625px] border-[#FFA475]' : 'border-gray-300'
        } outline-none focus:border-[#FFA475] flex items-center justify-between `}
      >
        <input
          type={passwordVisible ? 'text' : type}
          readOnly={readOnly}
          id={id}
          required={required ? true : false}
          placeholder={placeholder}
          value={value || ''}
          onChange={handleInputChange}
          className={`border-none w-full dark:bg-white outline-none`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {type === 'password' && (
          <button
            type="button"
            className=" right-3  text-[#747579]  transform "
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <FaEyeSlash size={20} /> // Show the eye-slash icon when the password is visible
            ) : (
              <FaEye size={20} /> // Show the eye icon when the password is hidden
            )}
          </button>
        )}
      </div>

      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {generalError && (
        <p className="text-red-500 text-sm mt-1">{generalError}</p>
      )}
    </div>
  );
};

export default InputWithFocus;
