import React from "react";
import "./Header.css";

const Header = ({leftChild, title, rightChild}) => {
  return (
    <div className="Header">
      <div className="Header_left">{leftChild}</div>
      <div className="title">{title}</div>
      <div className="Header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
