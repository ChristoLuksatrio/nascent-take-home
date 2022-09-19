import React from "react";
import Button from "../components/Button";

const Verify = () => {
  const formInput = JSON.parse(window.localStorage.getItem("formInput") || "");
  return (
    <div>
      <p>Please verify your info</p>
      {Object.keys(formInput).map((key, index) => (
        <p key={index}>
          {key}:{formInput[key]}
        </p>
      ))}
      <Button text="Confirm" path="/success" />
    </div>
  );
};

export default Verify;
