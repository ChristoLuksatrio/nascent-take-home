import React from "react";
import { Link, To } from "react-router-dom";

interface ButtonProps {
  text: String;
  path: To;
  className?: String;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text,
  path,
  className,
  disabled,
  type,
}) => {
  const disableClick = (event: any) => {
    if (disabled) {
      event.preventDefault();
    }
  };
  return (
    <Link
      className={`${className} ${
        disabled ? "button-disabled" : "button-active"
      } text-center px-4`}
      to={path}
      onClick={disableClick}
    >
      <button type={type}>{text}</button>
    </Link>
  );
};

export default Button;
