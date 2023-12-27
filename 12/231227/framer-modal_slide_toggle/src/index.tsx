import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App01 from "./App01";
import App02 from "./App02";
import SvgStroke from "./SvgStroke";
import Toggle from "./Toggle";
import Slide from "./Slide";
import App06 from "./App06";
import Modal from "./Modal";
import ModalAll from "./ModalAll"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ModalAll />);
