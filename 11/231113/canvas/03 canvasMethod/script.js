const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 200, 100);
ctx.stroke = "#222";
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);
