import React from "react";
import "./Body.css";

function Body(props) {
  console.log(props);
  const { name, location } = props;
  return (
    <div>
      <h1>
        {name}는 {location}에 거주중입니다.
      </h1>
    </div>
  );
}

export default Body;
