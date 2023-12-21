import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
//이렇게안하고 컴포넌트 만들어서 그걸로할거임

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(<RouterProvider router={Router} />);
