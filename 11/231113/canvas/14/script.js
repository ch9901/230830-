let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// //그림자가 없는 원
// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orange");

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// // let img = new Image();

// // img.src = "../img/pattern.png";
// // img.onload = () => {
// //   let pattern = ctx.createPattern(img, "repeat");
// //   ctx.fillStyle = pattern;
// //   ctx.fillRect(0, 0, 800, 800);
// // };

// //그림자가 있는 원
// ctx.shadowColor = "#ccc";
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 10;
// ctx.shadowBlur = 10;

// let radGrad02 = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad02.addColorStop(0, "white");
// radGrad02.addColorStop(0.4, "yellow");
// radGrad02.addColorStop(1, "orange");

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// const lineCap = ["butt", "round", "square"];
// for (let i = 0; i < lineCap.length; i++) {
//   ctx.strokeStyle = "#222";
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke();
// }

const lineJoin = ["bevel", "miter", "round"];

for (let i = 0; i < lineJoin.length; i++) {
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}
