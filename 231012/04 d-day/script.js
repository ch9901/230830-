let today = new Date();
//연도정보저장
let nowYear = today.getFullYear();
//날짜정보저장 20231231
let theDate = new Date(nowYear, 11, 31);

let diffDate = theDate.getTime() - today.getTime();

// document.write(diffDate); //6874375148 / 86,400,000(1일의 밀리초 값)
let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
document.write(`연말 D-Day : ${result}일 남았습니다.`);

// Math.ceil -> 반올림
// Math.floor -> 버림