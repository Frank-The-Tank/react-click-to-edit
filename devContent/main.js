import React from "react";
import ReactDOM from "react-dom";
import ClickToEdit from "../dist/index.umd.js";
import "./main.css";

const App = () => (
  <ClickToEdit
    customStyle="myStyle"
    endEditing={value => console.log(`New value: ${value}`)}
  >
    Click to edit here !!
  </ClickToEdit>
);

ReactDOM.render(<App />, document.getElementById("app"));