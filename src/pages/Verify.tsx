import React from "react";
import Button from "../components/Button";
import Pencil from "../assets/pencil.svg";
import { Link } from "react-router-dom";

const Verify = () => {
  const formInput = JSON.parse(window.localStorage.getItem("formInput") || "");
  const camelCaseToTitleCase = (text: String) => {
    const uppercasedText = text.replace(/([A-Z])/g, " $1");
    const finalText =
      uppercasedText.charAt(0).toUpperCase() + uppercasedText.slice(1);
    return finalText;
  };
  return (
    <div className="flex flex-col h-full">
      <p className="text-xl mb-1">Please verify your info</p>
      <div className="h-1 w-16 bg-amber-900 mb-4"></div>
      {Object.keys(formInput).map((key, index) => (
        <p key={index}>
          {camelCaseToTitleCase(key)}:{formInput[key]}
          <Link
            to={key == "pokemon" ? "/choose" : "/signup"}
            className="ml-2 w-4 inline-block"
          >
            <img className="h-auto w-auto" src={Pencil} alt="Edit Icon" />
          </Link>
        </p>
      ))}
      <Button className="mt-auto" text="Confirm" path="/success" />
    </div>
  );
};

export default Verify;
