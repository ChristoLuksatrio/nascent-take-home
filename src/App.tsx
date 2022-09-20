import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Choose from "./pages/Choose";
import Verify from "./pages/Verify";
import Success from "./pages/Success";
import { Infoboard } from "./pages/Infoboard";

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-800 text-white pt-16 px-4">
      <div className="card bg-amber-100 p-4 border-2 border-amber-800 rounded-lg text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/success" element={<Success />} />
          <Route path="/infoboard" element={<Infoboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
