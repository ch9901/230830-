//팝업창생성하기
/* 
윈도우객체(browser객체)
window.open(경로, 창 이름,창 옵션)
*/

const btn = document.querySelector("button");
console.log(btn);

let openPopup = () => {
  window.open(
    "notice.html",
    "이벤트팝업",
    "width=600 height=500 left=300 top=200"
  );
};

btn.addEventListener("click", openPopup);
