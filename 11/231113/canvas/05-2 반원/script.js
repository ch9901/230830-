const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.fill();

// //반원
// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.closePath();
// ctx.stroke();

// //호
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(200, 100);
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

// //타원만들기
// ctx.strokeStyle = "pink";
// ctx.moveTo(300, 100);
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.moveTo(300, 100);
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

//타원을 만드는 두번째 방법
ctx.strokeStyle = "orange";

//스케일로 찌그러트리기
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, false);
ctx.stroke();
ctx.closePath();
