import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search).get("keyword");
  console.log(search);
  return <div>https://developer.themoviedb.org/reference/search-movie 여기에 query값에 내가 검색할 거 넣고 오른편에 tryit </div>;
};

export default Search;
