import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Router from "./router/Router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
    <ToastContainer />
  </React.StrictMode>
);
