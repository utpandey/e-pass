import React from "react";
import { Input, InputProps } from "../../atoms/Input";
import { Text, ITextProps } from "../../atoms/Text";

export interface InputFieldProps extends InputProps, ITextProps {
  /**
   * What should be the class for this container div?
   */
  containerClass?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  containerClass,
  textSize,
  textStyles,
  color,
  weight,
  family,
  transform,
  placeholder = "Type something",
  type = "text",
  inputClass,
  isError = false,
  name,
  id,
  textLabel,
  value,
  onChangeInput,
  ...props
}) => {
  return (
    <div className={containerClass}>
      <Text
        textLabel={textLabel}
        textSize={textSize}
        textStyles={textStyles}
        color={color}
        weight={weight}
        family={family}
        transform={transform}
      />
      <Input
        placeholder={placeholder}
        name={name}
        id={id}
        inputClass={inputClass}
        isError={isError}
        value={value}
        onChangeInput={onChangeInput}
      />
    </div>
  );
};
