import React from "react";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./components/User";
import Follower from "./components/Follower";
//createBrowerRouter import

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "/users/:userID",
        element: <User />,
        children: [{ path: "followers", element: <Follower /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
