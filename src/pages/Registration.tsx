import React, { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Registration() {
  const beginningInput = window.localStorage.getItem("formInput")
    ? JSON.parse(window.localStorage.getItem("formInput") || "")
    : {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        pokemon: "",
      };
  const [formInput, setFormInput] = useState(beginningInput);

  useEffect(() => {
    window.localStorage.setItem("formInput", JSON.stringify(formInput));
  }, [formInput]);

  const registrationFormInput = Object.values(formInput).slice(0, 4);

  const checkInput = Object.values(registrationFormInput).every(
    (value) => value
  );

  return (
    <div className="flex flex-col h-full">
      <p className="text-xl mb-1">Details</p>
      <div className="h-1 w-16 bg-amber-900 mb-4"></div>
      <form className="flex flex-col">
        <p>First Name:</p>
        <input
          type="text"
          value={formInput.firstName}
          onChange={(e) =>
            setFormInput({ ...formInput, firstName: e.target.value })
          }
        />
        <p>Last Name:</p>
        <input
          type="text"
          value={formInput.lastName}
          onChange={(e) =>
            setFormInput({ ...formInput, lastName: e.target.value })
          }
        />
        <p>Phone Number:</p>
        <input
          type="text"
          value={formInput.phoneNumber}
          onChange={(e) =>
            setFormInput({ ...formInput, phoneNumber: e.target.value })
          }
        />
        <p>Address:</p>
        <input
          className="mb-4"
          type="text"
          value={formInput.address}
          onChange={(e) =>
            setFormInput({ ...formInput, address: e.target.value })
          }
        />
        <Button
          disabled={!checkInput}
          type="submit"
          text="CONTINUE"
          path="/choose"
          className="mt-auto"
        />
      </form>
    </div>
  );
}
