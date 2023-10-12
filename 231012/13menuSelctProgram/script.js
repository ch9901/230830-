//메뉴고르기프로젝트

let menu = ["감자탕", "도시락", "샐러드", "편의점", "짜장면"];
let menuNum = Math.floor(Math.random() * menu.length);
let result = menu[menuNum];
document.write(result);
