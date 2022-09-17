import React from "react";
import "./App.css";
import { GET_SUBMISSIONS } from "./graphql/Query";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_SUBMISSIONS);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="App">
      {data?.getSubmissions.map((submission: any, index: number) => (
        <div key={index}>{submission.firstName}</div>
      ))}
    </div>
  );
}

export default App;
