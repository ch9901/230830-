import React from "react";
import "./Header.css";
// import Button from "./Button";

const Header = ({ leftChild, title, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;