import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login, { Signup } from "./login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.jsx";
import NewTask from "./NewTask.jsx";

function AppRouter() {
  const [taskArray, setTaskArray] = useState([]);
  const [completeTaskArray, setCompleteTaskArray] = useState([]);

  const route = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    {
      path: "homepage",
      element: (
        <Home
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          completeTaskArray={completeTaskArray}
          setCompleteTaskArray={setCompleteTaskArray}
        />
      ),
    }, // Pass taskArray and setTaskArray to Home
    {
      path: "new",
      element: (
        <NewTask
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          completeTaskArray={completeTaskArray}
          setCompleteTaskArray={setCompleteTaskArray}
        />
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
