import React from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userID } = useParams();
  console.log(useOutletContext());
  console.log(userID);
  return (
    <div>
      <h1>
        User with it {userID} is name {users[Number(userID) - 1]?.name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(userID) - 1].name }} />
    </div>
  );
};

export default User;
