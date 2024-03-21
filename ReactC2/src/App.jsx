import React from "react";
import { Age } from "./components/Age";
import { Address } from "./components/Address"; // Import Address component

export function App() {
  var users = [
    {
      fName: "Ivan",
      lName: "Ivanov",
      address: "Skopje",
      age: 23,
    },
    {
      fName: "Maja",
      lName: "Maeva",
      address: "Prilep",
      age: 17,
    },
    {
      fName: "Kosta",
      lName: "Kostov",
      address: "Ohrid",
      age: 18,
    },
    {
      fName: "Elena",
      lName: "Elenova",
      address: "Strumica",
      age: 22,
    },
  ];

  return (
    <div id="app">
      <h1>Users</h1>
      <hr />
      <h2>Users older than 18</h2>
      {users
        .filter((user) => user.age >= 18)
        .map((user, index) => (
          <ul key={index}>
            <li>
              <Age name={user.fName} prezime={user.lName} godini={user.age} />
            </li>
          </ul>
        ))}
      <hr />
      <h2>Users younger than 18</h2>
      {users
        .filter((user) => user.age < 18)
        .map((user, index) => (
          <ul key={index}>
            <li>
              <Age name={user.fName} prezime={user.lName} godini={user.age} />
            </li>
          </ul>
        ))}
      <hr />
      <h2>Users from Skopje</h2>
      {users
        .filter((user) => user.address === 'Skopje')
        .map((user, index) => (
          <ul key={index}>
            <li>
              <Address name={user.fName} prezime={user.lName} address={user.address} />
            </li>
          </ul>
        ))}
    </div>
  );
}
