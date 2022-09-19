import React from "react";
import { Link, To } from "react-router-dom";

interface ButtonProps {
  text: String;
  path: To;
  className?: String;
}

const Button: React.FC<ButtonProps> = ({ text, path, className }) => {
  return (
    <Link
      className={`${className} button bg-amber-500 hover:bg-amber-400 shadow-md text-amber-900 border-2 border-amber-900 rounded-md text-center px-4`}
      to={path}
    >
      {text}
    </Link>
  );
};

export default Button;
