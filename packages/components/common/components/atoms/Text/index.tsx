import React from "react";

export interface TextProps {
  /**
   * This is the text label
   */
  label: string;
  /**
   * This is the font-size text
   */
  textSize?: string;
  /**
   * This is the styles of text
   */
  textStyles?: string;
  /**
   * This is the text color
   */
  color?: string;
  /**
   * This is the text weight
   */
  weight?: number;
  /**
   * This is font family
   */
  family?: string;
  /**
   * This is the text transform - 'uppercase', 'lowercase', 'Capitalize'
   */
  transform?: string;
}

export const Text: React.FC<TextProps> = ({
  label = "Text",
  textSize = "text-base md:text-xl sm:text-4xl",
  textStyles,
  color = "#000",
  weight = 600,
  family,
  transform = "none",
  ...props
}) => {
  return (
    <>
      <p
        className={[textSize, textStyles].join(" ")}
        style={{
          color: color,
          fontWeight: weight,
          fontFamily: family,
        }}
        {...props}
      >
        {label}
      </p>
    </>
  );
};
