import React, { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Registration() {
  const beginningInput = JSON.parse(
    window.localStorage.getItem("formInput") || ""
  ) || {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  };
  const [formInput, setFormInput] = useState(beginningInput);

  useEffect(() => {
    window.localStorage.setItem("formInput", JSON.stringify(formInput));
  }, [formInput]);

  const checkInput = Object.values(formInput).every((value) => value);

  return (
    <div>
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
        />
      </form>
    </div>
  );
}
