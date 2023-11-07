//공통페이지 : index.html
//라우팅(분기) 페이지(1) : home.html, game.html, jukebox.html
//라우팅(분기) 페이지(2) : home.css, game.css, jukebox.css
//라우팅(분기) 페이지(3) : home.js, game.js, jukebox.js

//리액트 => 각각의 html 페이지를 모든 html의 역할을 해야하는 페이지들을 js로 만듬 => 각각 모듈화시켜서 main.js화 시킴!

//각 탭을 클릭 시 -> 해당 탭에 연관성이 있는 페이지가 나와야한다.
//페이지가 나옴과 동시에 오른쪽의 탭의 스타일이 변경되어야한다.
// 선택된 탭의 경우 배경컬러가 흰색, 폰트컬러는 검정이 되어야한다.
const menuHome = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menu-home").style = "color:#000; background : #fff";
  document.querySelector("#menu-game").style =
    "color:#fff; background : #2982b5";
  document.querySelector("#menu-jukebox").style =
    "color:#fff; background : #2982b5";
};

const menuGame = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menu-game").style = "color:#000; background : #fff";
  document.querySelector("#menu-home").style =
    "color:#fff; background : #2982b5";
  document.querySelector("#menu-jukebox").style =
    "color:#fff; background : #2982b5";
};

const menuJukebox = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menu-jukebox").style =
    "color:#000; background : #fff";
  document.querySelector("#menu-game").style =
    "color:#fff; background : #2982b5";
  document.querySelector("#menu-game").style =
    "color:#fff; background : #2982b5";
};

//재생버튼을 클릭했을 때, 음원재생
//일시정지 버튼을 클릭했을 때, 음원정지
//재생, 일시정지 버튼-> albumTable_song의 DOM정의
//음원은 1개만 있는것이 아니다. 사용자는 어떤 음원을 선택할지 알 수 없다. -> 반복문이 필요하다.

const songs = document.querySelectorAll(".albumtable-song");

let i = 0;

for (let el of songs) {
  let playBtn = el.querySelector(".fa-play");
  let pauseBtn = el.querySelector(".fa-pause");
  playBtn.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
    pauseBtn.addEventListener("click", (e) => {
      e.currentTarget.closest("td").querySelector("audio").pause();
    });
  });
}
