import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/Layout";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <Layout />;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorker.unregister();