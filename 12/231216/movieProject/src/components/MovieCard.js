import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
  // console.log(item);
  const itemPoster = item.poster_path;
  const { genreList } = useSelector((state) => state.movie);
  // console.log(genreList);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${itemPoster}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id, index) => (
            <Badge className="badge" key={index} bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <span>{item.vote_average} / 10</span>
        <span>{item.adult ? "청소년 관람불가" : "청소년 관람가"}</span>
      </div>
    </div>
  );
};

export default MovieCard;
