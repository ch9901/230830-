import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  //문자열로 받아오고요 그게 아니라면 any라는 타입으로 받아올게요
  const { coinId } = useParams<RouteParams | any>();
  // console.log(coinId);
  return <div>Coin : {coinId}</div>;
};

export default Coin;
