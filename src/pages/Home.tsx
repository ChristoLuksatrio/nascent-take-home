import React from "react";
import Button from "../components/Button";
import logo from "../assets/logo.webp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full max-w-xl text-center">
      <div className="w-20 mb-4">
        <img className="h-auto w-auto" src={logo} alt="pokeball" />
      </div>
      <h1 className="mb-4">Nascent Pokemon Tech Challenge</h1>
      <Button className="mb-4" component="START" path="/signup" />
      <em className="text-xs justify-self-end">
        This website was made for Nascent's technical challenge and is purely
        for demonstration purposes only.
      </em>
    </div>
  );
}
