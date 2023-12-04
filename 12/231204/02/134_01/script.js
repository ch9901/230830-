const character = document.querySelector(".character");

//js이벤트 : 클릭, 스크롤 마우스무브, 드래그
// dragstart :

character.addEventListener("dragstart", () => {
  console.log("드래그시작");
});
character.addEventListener("drag", () => {
  console.log("드래그중");
});
character.addEventListener("dragend", () => {
  console.log("종료");
});
