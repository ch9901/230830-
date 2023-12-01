//무엇을 정의해야하는가?
//마우스 크롤 휠 이동에 따른 스크롤 값
//상단부 7장의 이미지 각각에 대한 정의

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");

const totalNum = imageAll.length;

let scrollNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0,0,${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
