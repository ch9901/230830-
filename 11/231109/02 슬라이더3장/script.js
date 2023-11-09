//변수 및 버튼에 대한 정의
const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

let currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//ul, li너비 값 정의
const updateWidth = () => {
  let currentSlides = slide;
  let newSlideCount = currentSlides.length;
  let newWidth = `
${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
`;
  slides.style.width = newWidth;
};

//ul, li위치 값 세팅
const setInitialPos = () => {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue})px`;
};

//li태그 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
};
updateWidth();
setInitialPos();

setTimeout(() => {
  slides.classList.add("animated");
}, 100);
makeClone();

//슬라이드 이동함수!
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  //바뀐 인덱스값을 현재 인덱스 값으로 가져간다리
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = `0px`;
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//자동슬라이드
let timer = undefined;
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};
autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};
slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

//버튼클릭이벤트
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
