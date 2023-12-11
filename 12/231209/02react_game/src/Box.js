import React from "react";
import { gameimg } from "./util";

const Box = ({ title, item, result }) => {
  console.log(title, item, result);
  if (title === "Computer" && result !== "tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  } else {
    result = result;
  }
  console.log(result);

  return (
    <div className={`Box ${result}`}>
      <h1>{title}</h1>
      <img
        className="item-img"
        //비동기처리이므로 아이템을 불러오고, 아이템이미지, 네임값을 한번에 실행하기때문에 item을 받아오고, 이미지와 네임값을 가져와라 라는 단락회로평가를 쓴거임 좌항이 참이어야 우항이 돌아감
        src={item && item.img}
        alt={item && item.name}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
