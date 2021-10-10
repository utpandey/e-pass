import React from "react"
import "./button.scss";
// import { IButton } from "../../../types/index";

export interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Type for this button?
   */
  type?: "button" | "submit" | "reset";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What radius it should be
   */
  borderRadius?:  "-none" | "-sm" | "-" | "-md" | "-lg" | "-xl" | "-2xl" | "-3xl" | "-full";
  /**
   * Border style of the button
   */
  borderStyles?: string;
  /**
   * It has box-shadow?
   */
  boxShadow?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | "extra";
  /**
   * How much the lie height should be?
   */
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button contents style
   */
  labelStyles?: string;
  /**
   * Optional icon
   */
  icon?: any;
  /**
   * icon alternate
   */
  iconAlt?: string;
  /**
   * icon styles
   */
  iconStyles?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  primary = false,
  type = "button",
  size = "medium",
  backgroundColor,
  borderStyles,
  borderRadius = "",
  label,
  labelStyles,
  lineHeight = "loose",
  boxShadow,
  icon,
  iconAlt,
  iconStyles,
  ...props
}) => {
  const mode = primary ? "sb-button--primary" : "sb-button--secondary";

  return (
    <button
      type={type}
      className={[
        `rounded${borderRadius}`,
        borderStyles,
        backgroundColor,
        labelStyles,
        "sb-button",
        `sb-button--${size}`,
        `leading-${lineHeight}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor, boxShadow }}
      {...props}
    >
      {icon && <img src={icon} alt={iconAlt} className={iconStyles} />}
      {label}
    </button>
  );
};
