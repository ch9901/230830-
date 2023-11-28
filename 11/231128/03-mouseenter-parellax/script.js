const cursorItem = document.querySelector(".cursor-item");
const circle = document.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.09;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // cursorItem.style.top = y + "px";
  // cursorItem.style.left = x + "px";
  // console.log(e.pageX, e.pageY);
});
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};
loop();

buttonAll.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.5)";
  });
  el.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
// bottomA.addEventListener("mouseenter", () => {
//   circle.style.width = 50 + "px";
//   circle.style.height = 50 + "px";
// });

// bottomA.addEventListener("mouseleave", () => {
//   circle.style.width = 120 + "px";
//   circle.style.height = 120 + "px";
// });
