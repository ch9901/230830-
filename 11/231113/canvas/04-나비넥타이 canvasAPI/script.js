const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.stroke();

ctx.lineTo(50, 150);
ctx.stroke();
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.stroke();
ctx.lineTo(250, 150);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "rgb(95,0, 20)";
ctx.fill();
