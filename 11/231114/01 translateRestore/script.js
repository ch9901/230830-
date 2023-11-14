const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);
//원점 저장쓰하고 바꿀거다 라는 ..
ctx.save();


//원점의 위치를 옮기는 메서드
ctx.translate(150, 150);
ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);

//원점을 바꾸기 전의 원래 원점으로 돌아가랑
ctx.restore();
ctx.fillStyle = "#0f0";
ctx.fillRect(50, 50, 80, 20);
