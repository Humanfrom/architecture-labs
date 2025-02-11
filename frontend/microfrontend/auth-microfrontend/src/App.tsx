import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login"

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div>Name: auth-microfrontend</div>
      <div>Framework: react-18</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
