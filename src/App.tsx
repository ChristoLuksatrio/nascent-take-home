import React from "react";
import "./App.css";
import { GET_SUBMISSIONS } from "./graphql/Query";
// import { ADD_SUBMISSION } from "./graphql/Mutation";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data, networkStatus } = useQuery(GET_SUBMISSIONS, {
    notifyOnNetworkStatusChange: true,
  });
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

  if (loading) {
    console.log("loading happened");
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
