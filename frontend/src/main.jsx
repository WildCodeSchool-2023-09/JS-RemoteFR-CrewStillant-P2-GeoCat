import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Jeu from "./pages/Jeu";
import Contact from "./pages/Contact";
import Equipe from "./pages/Equipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Jeu",
        element: <Jeu />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Equipe",
        element: <Equipe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
