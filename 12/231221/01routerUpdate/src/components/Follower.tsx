import React from "react";
//부모요소가 context를 통해 주느 값을 받아오는 훅임
import { useOutletContext } from "react-router-dom";

interface iFollowersContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<iFollowersContext>();
  console.log(nameOfMyUsers);
  return <div>Here are {nameOfMyUsers}'s Follwers</div>;
};

export default Follower;
