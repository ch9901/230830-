const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  };
}

let obj = [];

for (let i = 0; i < 20; i++) {
  let ranRadius = Math.floor(Math.random() * 150);
  let x = Math.floor(Math.random() * canvas.width + ranRadius);
  let y = Math.floor(Math.random() * canvas.height - ranRadius);
  let ranColorOperator = () => {
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  };
  let rancolor = ranColorOperator();
  obj.push(new Circle(x, y, ranRadius, rancolor));
}
console.log(obj);
for (let i = 0; i < obj.length; i++) {
  obj[i].draw();
}
