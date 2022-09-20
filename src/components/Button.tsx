import React from "react";
import { Link, To } from "react-router-dom";
import useSound from "use-sound";

interface ButtonProps {
  text: String;
  path?: To;
  className?: String;
  disabled?: boolean;
  disableLink?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text,
  path,
  className,
  disabled,
  disableLink,
  type,
}) => {
  const clickSFX = require("../assets/click.mp3");
  const failSFX = require("../assets/fail.mp3");
  const [playClickSFX] = useSound(clickSFX);
  const [playFailSFX] = useSound(failSFX);
  const handleClick = (event: any) => {
    if (disabled || disableLink) {
      event.preventDefault();
    }
    if (disabled) {
      playFailSFX();
    } else {
      playClickSFX();
    }
  };
  return (
    <Link
      className={`${className} ${
        disabled ? "button-disabled" : "button-active"
      } text-center px-4 cursor-pointer`}
      to={path || "/"}
      onClick={handleClick}
    >
      <button type={type}>{text}</button>
    </Link>
  );
};

export default Button;
