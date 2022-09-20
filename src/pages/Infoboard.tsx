import React from "react";
import { GET_SUBMISSIONS } from "../graphql/Query";
import { useQuery } from "@apollo/client";

export function Infoboard() {
  const { loading, error, data } = useQuery(GET_SUBMISSIONS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Infoboard</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Pokemon</th>
          </tr>
        </thead>
        <tbody>
          {data?.getSubmissions.map((submission: any, index: number) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.firstName}</td>
              <td>{submission.firstName}</td>
              <td>{submission.firstName}</td>
              <td>{submission.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
