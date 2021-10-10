import React from "react";

export interface InputProps {
  /**
   * What placeholder should it be?
   */
  placeholder: string;
  /**
   * What should be the name of the input?
   */
  name?: string;
  /**
   * What should be the id of the input?
   */
  id?: string;
  /**
   * What tailwind class should it be?
   */
  inputClass?: string;
  /**
   * Is there any error?
   */
  isError?: boolean;
  /**
   * What type should it be?
   */
  type?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "tel"
    | "url"
    | "hidden"
    | "date"
    | "checkbox"
    | "image"
    | "file"
    | "search";
  /**
   * Input change handler?
   */
  onChangeInput?: any;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = "Type something",
  onChangeInput,
  name,
  value,
  id,
  type = "text",
  inputClass,
  isError = false,
  ...props
}) => {
  const error = isError ? "border-red-500" : "";
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      {...props}
      className={[
        "outline-none p-2 border border-gray-900 rounded-sm",
        `${inputClass}`,
        `${error}`,
      ].join(" ")}
      onChange={(e) => onChangeInput(e.target.value)}
    />
  );
};
