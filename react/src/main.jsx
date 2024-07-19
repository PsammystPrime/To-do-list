import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login, { Signup } from "./login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.jsx";

const route = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "homepage", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
