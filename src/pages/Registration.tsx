import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import PhoneInput from "react-phone-input-2";

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
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [displayPhoneErrorMessage, setDisplayPhoneErrorMessage] =
    useState(false);
  const [missingValues, setMissingValues] = useState<any>([]);

  const handleErrorMessage = () => {
    setDisplayErrorMessage(false);
    setDisplayPhoneErrorMessage(false);
    setMissingValues([]);
    if (!checkInput) {
      displayMissingFormValues();
      setDisplayErrorMessage(true);
    }
    if (formInput.phoneNumber.length < 11) {
      setDisplayPhoneErrorMessage(true);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("formInput", JSON.stringify(formInput));
  }, [formInput]);

  const formInputValues = Object.values(formInput).slice(0, 4);
  const formInputKeys = Object.keys(formInput).slice(0, 4);

  const displayMissingFormValues = () => {
    const missingValueArray: string[] = [];
    formInputValues.forEach((input, key) => {
      if (!input) {
        missingValueArray.push(formInputKeys[key]);
      }
    });
    setMissingValues(missingValueArray);
  };

  const checkInput = Object.values(formInputValues).every((value) => value);

  return (
    <div className="flex flex-col h-full max-w-xl">
      <p className="text-xl mb-1">Details</p>
      <div className="h-1 w-16 bg-amber-900 mb-4"></div>
      <div className="flex flex-col h-full">
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
        <PhoneInput
          value={formInput.phoneNumber}
          onChange={(value) =>
            setFormInput({ ...formInput, phoneNumber: value })
          }
        />
        <p>Address:</p>
        <input
          className="mb-2"
          type="text"
          value={formInput.address}
          onChange={(e) =>
            setFormInput({ ...formInput, address: e.target.value })
          }
        />
        {displayErrorMessage && missingValues.length > 0 ? (
          <p className="text-xs mb-4 text-red-600">
            Missing values: {missingValues.join(", ")}
          </p>
        ) : null}
        {displayPhoneErrorMessage ? (
          <p className="text-xs mb-4 text-red-600">Invalid phone number</p>
        ) : null}
        <div className="flex flex-col mt-auto" onClick={handleErrorMessage}>
          <Button
            disabled={!checkInput || formInput.phoneNumber.length < 11}
            type="submit"
            component="CONTINUE"
            path="/choose"
          />
        </div>
      </div>
    </div>
  );
}
