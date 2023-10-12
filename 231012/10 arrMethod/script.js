// //배열객체에서 내장메서드사용하기
// let arr_1 = ["사당", "교대", "방배", "강남"];
// let arr_2 = ["신사", "압구정", "옥수"];

// document.write(arr_1, "</br>");
// document.write(arr_2, "</br>");

// let result = arr_1.join("-");
// document.write(result, "</br>");

// result = arr_1.concat(arr_2);
// document.write(result, "</br>");

// result = arr_1.slice(1, 3); // 인덱스 의미 1부터시작 3인덱스 이전까지!
// document.write(result, "</br>");

// arr_1.sort(); //가나다순으로 출력
// document.write(arr_1, "</br>");

// arr_1.reverse(); //뒤에서부터출력
// document.write(arr_1, "</br>");

let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금", "정자", "수서"];

// document.write(greenArr, "</br>");
// document.write(yellowArr, "</br>");

// greenArr.splice(2, 1, "서초", "역삼", "</br> <hr>"); //2번 인덱스에서 부터(본인포함) 하나의 아이템(강남)을 대체해라 서초와 역삼으로
// document.write(greenArr); // 교대방배서초역삼

let data_1 = yellowArr.pop(); // 맨 끝 잘라내기
document.write(yellowArr, "</br>");

data_2 = yellowArr.shift(); // 맨 앞만 잘라내기
document.write(yellowArr, "</br>");

yellowArr.push(data_2); // 해당 요소를 맨 앞에 넣기
document.write(yellowArr, "</br>");

yellowArr.unshift(data_1); // 해당요소를 맨 뒤에 넣기
document.write(yellowArr, "</br>");
