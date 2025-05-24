import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Autprovider from "./authenticationContex";

ReactDOM.render(
  <Autprovider>
    <App />
  </Autprovider>,
  document.getElementById("root")
);
