import "normalize.css/normalize.css";
import React from "react";
import ReactDom from "react-dom";
import AppRouter from "./routers/AppRouter";
// import { createStore } from "redux";
import "./styles/styles.scss";

const App = (
  <div>
    <AppRouter />
  </div>
);

ReactDom.render(App, document.getElementById("app"));
