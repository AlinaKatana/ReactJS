import React from "react";

export function Address(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Last Name: {props.prezime}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}