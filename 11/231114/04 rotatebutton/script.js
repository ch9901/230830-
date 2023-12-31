const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");

const origin = {
  x: 200,
  y: 200,
};
const alpha = 0.2;

ctx.fillStyle = "#ccc";
ctx.fillRect(200, 200, 100, 100);

// ctx.rotate((30 * Math.PI) / 180);
// ctx.fillRect(200, 200, 100, 100);

const randomRGB = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
button.addEventListener("click", () => {
  let color = randomRGB();

  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  ctx.globalAlpha = alpha;

  // let r = Math.ceil(Math.random() * 255);
  // let g = Math.ceil(Math.random() * 255);
  // let b = Math.ceil(Math.random() * 255);

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
