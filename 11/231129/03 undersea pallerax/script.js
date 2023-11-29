//심해깊이를 나타내주는 텍스트 공간의 정의
const deeptext = document.querySelector(".meterdeep");
//바 정의
const progressBar = document.querySelector(".bar");
//스크롤위치에 다라 이동하는 잠수함 정의
const submarine = document.querySelector(".submarine");
//문어정의
const octo = document.querySelector(".octo");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight);
  let meter = ((scrollNum / documentHeight) * 2000).toFixed(0);
  deeptext.innerText = meter;
  progressBar.style.width = per + "%";
  submarine.style.transform = `translateX(${per}%)`;
  octo.style.transform = `translateY(${-per / 2}%)`;
});
