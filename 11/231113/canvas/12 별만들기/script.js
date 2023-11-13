const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(60, 120);
ctx.lineTo(100, 3);
ctx.lineTo(135, 120);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(310, 100);
ctx.lineTo(120, 250);
ctx.lineTo(190, 30);
ctx.lineTo(280, 250);
ctx.lineTo(80, 100);

ctx.stroke();
