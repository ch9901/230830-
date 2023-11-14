const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "pink",
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(
    circle.x,
    circle.y,
    circle.radius,
    0,
    (Math.PI / 180) * 2 * 180,
    false
  );
  ctx.fillStyle = circle.color;
  ctx.fill();
};
const move = () => {
  //canvasAPI: clearRect(시작점x, 시작점y, 끝점x, 끝점y) -> 특정 좌표 값 안에있는 요소를 없앰
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(255,255,255,0.3)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
  }
  // circle.y = circle.y + circle.dy;
  requestAnimationFrame(move);
};
move();
