import React from "react";
import Button from "../components/Button";

const Verify = () => {
  return (
    <div>
      <p>Please verify your info</p>
      <Button text="Confirm" path="/success" />
    </div>
  );
};

export default Verify;
