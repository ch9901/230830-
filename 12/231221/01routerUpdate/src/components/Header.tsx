import React from "react";
import Home from "./Home";
import About from "./About";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>
          <button onClick={goToAbout}>이벤트 참여하깅</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
