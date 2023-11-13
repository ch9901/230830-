const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D();

triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();
ctx.stroke(triangle);

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2, true);

circle.closePath();

ctx.fillStyle = "green";
ctx.fill();
ctx.stroke(circle);
