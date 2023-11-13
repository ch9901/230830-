let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "tomato");
linGrad.addColorStop(0.5, "yellow");
linGrad.addColorStop(1, "dodgerblue");

ctx.fillStyle = linGrad;

ctx.fillRect(0, 0, 100, 200);
