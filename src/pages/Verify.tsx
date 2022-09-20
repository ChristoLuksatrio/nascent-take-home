import React, { useState } from "react";
import Pencil from "../assets/pencil.svg";
import { Link } from "react-router-dom";
import { ADD_SUBMISSION } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [loading, setLoading] = useState(false);

  const formInput = JSON.parse(window.localStorage.getItem("formInput") || "");

  const camelCaseToTitleCase = (text: String) => {
    const uppercasedText = text.replace(/([A-Z])/g, " $1");
    const finalText =
      uppercasedText.charAt(0).toUpperCase() + uppercasedText.slice(1);
    return finalText;
  };

  const [addSubmission] = useMutation(ADD_SUBMISSION);

  const clickSFX = require("../assets/click.mp3");
  const [playClickSFX] = useSound(clickSFX);
  let navigate = useNavigate();

  const submitForm = () => {
    playClickSFX();
    setLoading(true);
    addSubmission({
      variables: formInput,
    })
      .then(() => {
        setLoading(false);
        navigate("/success");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  if (loading) {
    return <div>Submitting Data...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <p className="text-xl mb-1">Please verify your info</p>
      <div className="h-1 w-16 bg-amber-900 mb-4"></div>
      {Object.keys(formInput).map((key, index) => (
        <p key={index}>
          {camelCaseToTitleCase(key)}:{formInput[key]}
          <Link
            to={key === "pokemon" ? "/choose" : "/signup"}
            className="ml-2 w-4 inline-block"
          >
            <img className="h-auto w-auto" src={Pencil} alt="Edit Icon" />
          </Link>
        </p>
      ))}

      <button onClick={submitForm} className="mt-4 md:mt-auto">
        Confirm
      </button>
    </div>
  );
};

export default Verify;
