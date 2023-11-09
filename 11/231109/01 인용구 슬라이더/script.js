//정의해야하는 요소들

//컨텐츠들의 높이 값이 다를경우를 방지하기위해 각각의 슬라이더의 전체 높이값을 변경해주기위한 정의
const sliderWrapper = document.querySelector(".container");

const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;

const navPre = document.querySelector("#prev");
const navNext = document.querySelector("#next");

//개별 슬라이드 컨텐츠 높이값 지정 함수 -> 각각의 슬라이드 높이값을 뽑아와서 비교함 -> for문
const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    //offsetHeight -> 각각의 아이템의 높이값을 찾는거 .length같이
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

//개별슬라이드 가로배열시키기!
for (let i = 0; i < slideCount; i++) {
  // i번째 인덱스 값의 슬라이드는 left값의 i*100로 가니까 자동으로 정렬되는거임
  slides[i].style.left = `${i * 100}%`;
}

//첫번째, 마지막슬라이드로 도착시 이동이 안되게끔
const updateNav = () => {
  //인덱스가 처음인경우
  if (currentIndex === 0) {
    navPre.classList.add("disabled");
  } else {
    navPre.classList.remove("disabled");
  }
  //인덱스가 마지막인경우
  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

//슬라이드 이동함수
const goToslide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  //이동 된 후의 인덱스 값이 본인의 값이 되게한다 ?
  currentIndex = i;

  //첫번째, 마지막슬라이드로 도착시 이동이 안되게끔 -> 무한슬라이드라면 필요없으셈
  // updateNav();
};

//버튼클릭 시 이벤트
const navPreclick = (e) => {
  e.preventDefault();
  //클릭했을 때 이동

  //무한슬라이드를 시키는 if문
  if (currentIndex > 0) {
    //현재 인덱스 값이 처음이 아닌경우!라는전제하에 움직임
    goToslide(currentIndex - 1);
  } else {
    goToslide(slideCount - 1);
  }
};

const navNextclick = (e) => {
  e.preventDefault();

  //무한슬라이드를 시키는 if문
  if (currentIndex < slideCount - 1) {
    //현재 인덱스 값이 마지막이 아닌경우! 라는 전제하에 움직임
    goToslide(currentIndex + 1);
  } else {
    goToslide(0);
  }
};

//웹 브라우저화면이 새로고침 혹은 시작 될 때 gotoslide함수인자갑 -> 0번째 슬라이드로 시작을해라 -> 왼쪽으로 가는 버튼이 없어짐 !
goToslide(0);

navPre.addEventListener("click", navPreclick);
navNext.addEventListener("click", navNextclick);
