import React from "react";
import ErrorComponent from "./ErrorComponent";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  //의도적으로 에러만들기
  // const users:any = [];

  // return <div>{users[0].name}</div>;

  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams);
  //특정한 주소값을 부여하고싶을 때
  // setTimeout(() => {
  //   setSearchParams({
  //     day: "today",
  //     tomorrow: "123",
  //   });
  // }, 3000);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
