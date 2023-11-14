const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "source-atop";

ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
