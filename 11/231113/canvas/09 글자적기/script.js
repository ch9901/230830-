let canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "italic 60px serif";
ctx.fillText("javascript", 50, 70);
ctx.font = "bold 60px sans-serif";
ctx.strokeText("javascript", 40, 150);
