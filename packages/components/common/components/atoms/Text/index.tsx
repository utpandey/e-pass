import React from "react";
import { motion } from "framer-motion";

export interface ITextProps {
  /**
   * This is the text label
   */
  textLabel: string;
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
  /**
   * Is it a framer motion component?
   */
  isFramer?: boolean;
}

export const Text: React.FC<ITextProps> = ({
  textLabel = "Text",
  textSize = "",
  textStyles = "p-0",
  color,
  weight = 600,
  family,
  transform = "none",
  isFramer = false,
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
        {textLabel}
      </p>
      )
    </>
  );
};
