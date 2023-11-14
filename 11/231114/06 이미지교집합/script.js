const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("javascript", 100, 280);

ctx.globalCompositeOperation = "source-in";

ctx.beginPath();
let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 1600, 900);
};
img.src =
  "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjdfMjgw/MDAxNTkwNTg0ODU2ODk1.nQp2_sU1ADzKzCEunN7iH0u2xUqJKwvwNdw_L4xMDeUg.hxW_YinkyeIJDYXo8srj_aIfk5gfSM3iZZ1U1YDyU0Ig.JPEG.mix_you/%EB%B0%B1%EC%98%88%EB%A6%B0.jpg?type=w800";
