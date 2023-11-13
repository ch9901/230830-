const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//3차배지에

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();
