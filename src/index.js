import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reducer, { initialState } from "./context/reducer";
import { StateProvider } from "./context/StateContext";
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
