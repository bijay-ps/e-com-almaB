import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// BELOW LIBRARIES
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
