const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.dx = Math.floor(Math.random() * 10) + 1;
  this.dy = Math.floor(Math.random() * 10) + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 180 * 2);
    ctx.fill();
  };

  this.animation = function () {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  };
}

const objs = [];

for (let i = 0; i < 20; i++) {
  let ranRadius = Math.ceil(Math.random() * 150);
  let x = Math.floor(Math.random() * window.innerWidth - ranRadius);
  let y = Math.floor(Math.random() * window.innerHeight - ranRadius);

  let ranColorOperator = () => {
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  };
  let rancolor = ranColorOperator();
  objs.push(new Circle(x, y, ranRadius, rancolor));
}
// for (let i = 0; i < objs.length; i++) {
//   objs[i].draw();
// }

const update = () => {
  //궤적이 남지않도록 캔버스를 계속지워주어야함
  //for 문을 활용해서 색상, 위치, 크기가 랜덤값으로 바뀌어야함
  //총 20개의 원이 모두 동일하게 랜덤값을 적용받아야함

  //궤적남지않게
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animation();
  }
  requestAnimationFrame(update);
};
update();
