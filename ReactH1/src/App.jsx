// var neshto = require('neshto'); es5

import React from "react"; //es6

// importiranje na klasna komponenta 
import {Header} from "./components/Header";
import {Paragraph} from "./components/Paragraph";

export function App () {
  return (
  <div id = "app">
    <Header/>
    <Paragraph/>
  </div>
  );
};