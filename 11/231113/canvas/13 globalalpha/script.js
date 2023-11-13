let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.7;

ctx.fillStyle = "rgb(255,221,102)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgb(0,123,0)";
ctx.fillRect(130, 50, 100, 50);
ctx.fillStyle = "rgb(12,80,109)";
ctx.fillRect(210, 50, 100, 50);
ctx.fillStyle = "rgb(202,221,255)";
ctx.fillRect(290, 50, 100, 50);
