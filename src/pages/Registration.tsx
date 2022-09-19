import React from "react";
import Button from "../components/Button";

export default function Registration() {
  return (
    <div className="flex flex-col">
      <p>First Name:</p>
      <input />
      <p>Last Name:</p>
      <input />
      <p>Phone Number:</p>
      <input />
      <p>Address:</p>
      <input className="mb-4" />
      <Button text="CONTINUE" path="choose" />
    </div>
  );
}
