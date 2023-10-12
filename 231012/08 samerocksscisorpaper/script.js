document.write("<h1>컴퓨터 가위바위보 맞추기😎</h1>");

let game = prompt("가위 바위 보 중 선택하세요", "ex) 가위");
let gameNum;

if (game !== null && game !== "") {
  switch (game) {
    case "가위":
      gameNum = 1;
      break;
    case "바위":
      gameNum = 2;
      break;
    case "보":
      gameNum = 3;
      break;
    default:
      alert("잘못 작성 했습니다.");
      location.reload();
  }
}

//3까지의 숫자가 필요하므로 *3, 2.9가 나오니까 무조건 올림해줘야하므로 ceil
let com = Math.ceil(Math.random() * 3);

//발생되는 랜덤 수와 이미지의 경로값이 같아져야하므로
document.write(`<img src="../img_231012/1/math_img_${com}.jpg">`);

if (gameNum == com) {
  document.write(`<img src="../img_231012/1/game_1.jpg">`);
} else {
  document.write(`<img src="../img_231012/1/game_2.jpg">`);
}
