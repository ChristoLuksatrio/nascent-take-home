import React from "react";
import "./App.css";
// import { ADD_SUBMISSION } from "./graphql/Mutation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  // const [addSubmission] = useMutation(ADD_SUBMISSION);

  // const clickerino = () => {
  //   addSubmission({
  //     variables: {
  //       firstName: "test",
  //       lastName: "test",
  //       phoneNumber: "test",
  //       address: "test",
  //       pokemon: "test",
  //     },
  //     refetchQueries: [{ query: GET_SUBMISSIONS }],
  //   });
  // };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-800 text-white pt-16">
      <div className="card bg-amber-100 p-4 border-2 border-amber-800 rounded-lg text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
