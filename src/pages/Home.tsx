import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full max-w-xl text-center">
      <Button className="mb-4" text="START" path="/signup" />
      <em className="text-xs justify-self-end">
        This website was made for Nascent's technical challenge and is purely
        for demonstration purposes only.
      </em>
    </div>
  );
}
