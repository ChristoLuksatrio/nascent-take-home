import React from "react";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  component: React.ReactNode;
  className?: String;
  disabled?: boolean;
  disableLink?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  path?: string;
}

const Button: React.FC<ButtonProps> = ({
  component,
  className,
  disabled,
  disableLink,
  type,
  onClick,
  path,
}) => {
  const navigate = useNavigate();
  const clickSFX = require("../assets/click.mp3");
  const failSFX = require("../assets/fail.mp3");
  const [playClickSFX] = useSound(clickSFX);
  const [playFailSFX] = useSound(failSFX);
  const handleClick = (event: any) => {
    if (onClick) {
      onClick();
    }
    if (disabled || disableLink) {
      event.preventDefault();
    }
    if (disabled) {
      playFailSFX();
    } else {
      playClickSFX();
    }
    if (path && !disabled) {
      navigate(path);
    }
  };
  return (
    <button
      className={`${className} ${
        disabled ? "button-disabled" : "button-active"
      } text-center px-4 cursor-pointer`}
      onClick={handleClick}
      type={type}
    >
      {component}
    </button>
  );
};

export default Button;
