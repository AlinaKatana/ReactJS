import React from "react";

export function Age(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Last Name: {props.prezime}</p>
      <p>Age: {props.godini}</p>
    </div>
  );
}
