import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Section from "./components/Section";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Section />
    <Section />
  </React.StrictMode>
);
