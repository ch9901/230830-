const getMovie = () => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();

    const url2 = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
    const response2 = await fetch(url);
    const data2 = await response2.json();

    const url3 = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
    const response3 = await fetch(url);
    const data3 = await response3.json();

    //이렇게 하면 위에거 불러오고 그 다음거 불러오고 하는 순서(동기)로 진행되기때문에 최선이 아님 => 엑시오스(Axios) 사용
  };
};
