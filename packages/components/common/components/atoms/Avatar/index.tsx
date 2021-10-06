import React from "react";
import "./avatar.scss";

export interface IAvatarProps {
  /**
   * Is the avatar still loading?
   */
  loading: boolean;
  /**
   * What is the size of the avatr
   */
  size?: "tiny" | "small" | "medium" | "large" | "extra";
   /**
   * background color for the avatar?
   */
    backgroundColor?: string;
  /**
   * What would be the username
   */
  username?: string;
  /**
   * What would be the abbreviation
   */
  abbreviation?: string;
  /**
   * Source for the avatar
   */
  src: string;
  /**
   * If the avatar is rounded
   */
  isRounded?: boolean;
  /**
   * Extra styles for the avatar
   */
  avatarStyles?: string;
   /**
   * Is the user online?
   */
    isOnline?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  loading = false,
  size = "medium",
  backgroundColor,
  username,
  abbreviation,
  src,
  isRounded = false,
  avatarStyles,
  isOnline,
  onClick,
  ...props
}) => {
  const rounded = isRounded ? "rounded-full" : "";
  const online = isOnline ? "user-online" : ""
  return loading ? (
    <div className={["sb-avatar-initials",avatarStyles, rounded, `sb-avatar-initials--${size}`,].join(" ")} style={{backgroundColor}}>
      <h1>{abbreviation}</h1>
    </div>
  ) : (
    <img
      src={src}
      className={[
        avatarStyles,
        rounded,
        online,
        "sb-avatar",
        `sb-avatar--${size}`,
      ].join(" ")}
      alt={username}
      {...props}
    />
  );
};
