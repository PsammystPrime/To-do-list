import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login, { Signup } from "./login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.jsx";
import NewTask from "./NewTask.jsx";

function AppRouter() {
  const [taskArray, setTaskArray] = useState([]);
  const [completeTaskArray, setCompleteTaskArray] = useState([]);
  const [pendingTaskArray, setPendingTaskArray] = useState([]);

  const route = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    // Pass taskArray and setTaskArray to Home and NewTask
    {
      path: "/homepage",
      element: (
        <Home
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          completeTaskArray={completeTaskArray}
          setCompleteTaskArray={setCompleteTaskArray}
          pendingTaskArray={pendingTaskArray}
          setPendingTaskArray={setPendingTaskArray}
        />
      ),
    },
    {
      path: "/new",
      element: (
        <NewTask
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          completeTaskArray={completeTaskArray}
          setCompleteTaskArray={setCompleteTaskArray}
          pendingTaskArray={pendingTaskArray}
          setPendingTaskArray={setPendingTaskArray}
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
