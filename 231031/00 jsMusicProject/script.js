const frame = document.querySelector("section");
console.log(frame);
const lists = frame.querySelectorAll("article");
const deg = 45;

let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".pic");
  console.log(pic);
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.background = `url(../contents/img/member${i + 1}.jpg)`;
  i++;

  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  //on class 부여해서 그림 돌아가게
  play.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  // 멈추고싶을 때 on class remvove
  pause.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  // 다시 재생하고싶을 때
  load.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = document.querySelectorAll("audio");

let active = 0;
let num = 0;
let len = lists.length - 1; // article의 인덱스 값을 가져오려고

let activation = (index, lists) => {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
};

let initMusic = () => {
  for (let el of audio) {
    el.pause();
    el.load();
    el.parentElement.previousElementSibling.classList.remove("on");
  }
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == 0 ? (active = len) : active--;
  activation(active, lists);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == len ? (active = 0) : active++;
  activation(active, lists);
});
