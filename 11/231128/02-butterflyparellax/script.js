const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

//목표지점 > 마우스를 어딘가로 이동했을 때의 그 지점
let x = 0;
let y = 0;

//타켓지점 > 목표지점을 향해서 따라가는 해당 아이템의 지점
let targetX = 0;
let targetY = 0;

//속도
let speed = 0.5;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  console.log(e.pageX, e.pageY);
  h1.innerText = `x:${x}, y:${y}`;
  // box.style.top = y - 30 + "px";
  // box.style.left = x - 30 + "px";

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    box.style.top = targetY - 30 + "px";
    box.style.left = targetX - 30 + "px";
    window.requestAnimationFrame(loop);
  };
  loop();
});

// const loop = () => {
//   console.log(1);
//   window.requestAnimationFrame(loop)
// };
