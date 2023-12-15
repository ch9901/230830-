/* 
netflix

1. 영화데이터 >> api데이터를 가져와야한다.
2. the movie database = TBDB
https://www.themoviedb.org/

api 발급받기

설치해야하는 npm
1. react-bootstrap
2. react-router
3. react-redux
4. redux
5. redux thunk
6. redux-dev tools extexsion

----------------------------------------------

페이지 3개 필요 
생성해야하는 페이지 
1. 홈페이지 (mainpage)
2. movie(main>영화를 누럴ㅆ을 때)
3. movie detail(영화상세페이지)

===============================================

index.js
router를 위해 BrowserRouter import
  <BrowserRouter>
    <App />
  </BrowserRouter>
  App컴포넌트 감싸주기

  --------------------------------------------
  App.js
  import route, routes
페이지 3개기때문에
<div>
    <Routes>
      <Route ></Route>
      <Route ></Route>
      <Route ></Route>
    </Routes>
</div>
    import Home, Movies,MovieDetail

    경로값, 가야할 element 설정
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>


    
리덕스 쓸거니까 index.js로 넘어가기
---------------------------------------------
index.js
import Provider

store.js생성
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;




--------------------------------------------
index.js에서 import store

--------------------------------------------
redux폴터에 reducers
index.js 생성
import combineReducers

import { combineReducers } from "redux";
export default combineReducers({});

store에 rootReducer import

---------------------------------------------

src 폴더생성 > component폴더생성 > Navigation.js > bootstrap nav scroll 복붙 > bootstrap 사용되는 컴포넌트들 import > app.js에 bootstrap css import

---------------------------------------------

필요한 logoimg, color 변경 

----------------------------------------------

TMDB에서 API끌어오기

외부에서 가져오는 API DATA 간 상관관계가있는 것에는 아무리 비동기 처리로 진행한다고 한 들 DATA수집에 대한 우선순위가 필요할 수 있다

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

    //이렇게 하면 위에거 불러오고 그 다음거 불러오고 하는 순서(동기)로 진행되기때문에 최선이 아님 => 엑시오스? 사용
  };


F/E : API데이터 호출 받아오는 3대장
fetch / ajax > asyncronous js and x../ Axios

Axios : 실제 가져오는 API데이터가 복수인 경우 비동기 방식으로 끌어올 수 있다.
fetch 함수의 경우 json을 객체로 변환시켜줘야하는 불편함 >> Axios는 바로 객체값으로 가져온다.
Axios는 node.js 기반에서 사용가능한 외부 API호출 문법이기 때문이다. 

js비동기처리 :callback, promise, fetch() >> then,error : 해당 처리들의 단점 >> Web기반에서만 fetch()최고~































-----------------------------------------------------
*/
