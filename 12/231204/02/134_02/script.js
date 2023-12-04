//드래그 이동 완료 후 발생시킬 수 있는 이벤트 종류

const box = document.querySelector(".box");
box.addEventListener("dragenter", () => {
  console.log("drag enter event");
});
box.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("drag over event");
});

box.addEventListener("dragleave", () => {
  console.log("drag leave event");
});

//drag 에서 drop이벤트를 처리할때는 반드시 dragover이벤트의 기본 속성을 무력화 해야한다.
box.addEventListener("drop", () => {
  console.log("drag drop event");
});
