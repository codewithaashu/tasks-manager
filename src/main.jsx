import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Tasks from "./Pages/Tasks.jsx";
import Todo from "./Pages/Todo.jsx";
import InProgress from "./Pages/InProgress.jsx";
import Completed from "./Pages/Completed.jsx";
import Trash from "./Pages/Trash.jsx";
import Teams from "./Pages/Teams.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/in-progress",
        element: <InProgress />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
