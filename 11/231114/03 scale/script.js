const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);
ctx.save();

//scale(x축의 값의 배수, y축 값의 배수) 스케일은 좌표값까지 배수로 넣어버림
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50); // x축 20*3 =60 y축 70*2=140지점 떨어진 지점에 100*3 50*2 의 네모를 만들어라 라는 명령어임

ctx.restore();
ctx.strokeRect(20, 70, 100, 50);
