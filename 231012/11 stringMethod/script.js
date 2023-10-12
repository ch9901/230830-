//문자열객체
let t = "Hello Thank you good luck to you";
document.write(t, "<br>");

document.write(t.charAt(16), "<br>"); //16번째 문자열을 출력함 0부터시작! **띄어쓰기까지센다
document.write(t.indexOf("you"), "<br>"); //you의 인덱스값의 시작
document.write(t.indexOf("you", 16), "<br>"); //16번째 뒤에서의 you라는 인덱스값의 시작값이 얼마냐
document.write(t.lastIndexOf("you"), "<br>"); // 마지막 you의 인덱스 값의 시작값이 얼마냐
document.write(t.lastIndexOf("you", 25), "<br>");
document.write(t.match("luck"), "<br>"); // match 안에 단어와 t 안에 같은 단어가있으면 찾아줘
document.write(t.search("luck"), "<br>"); // luck이라는 단어의 시작 인덱스 값을 찾아줘
document.write(t.substr(21, 4), "<br>"); //21번쩨 인덱스부터 4개의 문자열을 찾아줘
document.write(t.substring(6, 12), "<br>"); // 6번째부터 12인덱스 이전!까지의 문자열을 찾아줘 slice와 비슷하다
document.write(t.replace("you", "me"), "<br>"); //첫번째로오는 you를 me로 바꿔줘
document.write(t.toLowerCase(), "<br>"); // 모든 단어를 다 소문자로 변경
document.write(t.toUpperCase(), "<br>"); //모든 단어를 다 대문자로 변경

document.write(t.length, "<br>"); // 문자열 안에 총 개수 (띄어쓰기 세나?)

let s = t.split(" "); //각각의 문자를 ()여기 안에 들어가는 기준으로(지금은 띄어쓰기) 쪼개서 **배열 형태로!! s라는 변수에 넣어주세요
document.write(s, "<br>");
document.write(s[0], "<br>");
document.write(s[4], "<br>");

let str = "A";
let k = str.charCodeAt(0); // 아스키코드값 
document.write(k); 
