import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  //이걸 reducer, store를 활용해서 할거임 !
  // const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  // state.movie값이 어차피 객체 >> 그 안에 애들도 객체 >> 객체로 구조분해할당으로 나눠주기
  const { popularMovies, topratedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  // console.log(popularMovies, topratedMovies, upcomingMovies);
  useEffect(() => {
    //movieAction안에 getMovie를 실행시켜라
    dispatch(movieAction.getMovie());
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#f00",
  };

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="slide">
        <Banner movie={popularMovies.results[4]} />
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top Rated Movie</h1>
        <MovieSlide movies={topratedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    );
  }
};

export default Home;
