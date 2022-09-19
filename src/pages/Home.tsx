import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Button text="START" path="/signup" />
    </div>
  );
}
