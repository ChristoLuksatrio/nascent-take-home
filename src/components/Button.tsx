import React from "react";
import { Link, To } from "react-router-dom";
import useSound from "use-sound";

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
  const clickSFX = require("../assets/click.mp3");
  const [playClickSFX] = useSound(clickSFX);
  const handleClick = (event: any) => {
    if (disabled) {
      event.preventDefault();
    }
    playClickSFX();
  };
  return (
    <Link
      className={`${className} ${
        disabled ? "button-disabled" : "button-active"
      } text-center px-4`}
      to={path}
      onClick={handleClick}
    >
      <button type={type}>{text}</button>
    </Link>
  );
};

export default Button;
