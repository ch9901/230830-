//splice() : 배열내에 원하는 위치에 요소를 추가하거나 제거할 때 사용하는 메서드

//특정위치부터 끝까지 요소를 제거하고 싶을 때

let subject = ["html", "css", "javascript", "react", "typescript"];
console.log(subject);

//변수명.splice(매개변수) : 매개변수 뒤에부터 싹다 제거해라 !
subject.splice(2);
console.log(subject);

//splice()메서드 안에 매개변수가 2개 일 때
//첫번째 매개변수부터 시작해서 두번째 매개변수
//splice(여기서부터시작해서,여기인덱스까지 날려줘)
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);
week.splice(1, 5);
console.log(week);

//slice() : 배열안에 원하는 위치에 있는 값을 추출하고, 추가하는 메서드

let color = ["red", "green", "blue", "white", "black"];
console.log(color);

color.slice(2);
//slice는 원 배열 값을 변경시키지않음, 반면에 splice는 원 배열값을 변경시킴
//slice를 쓰지만 원 배열값은 변경되지 않아서 원 배열값이 그대로 출력 된다
console.log(color);
console.log(color.slice(2));

//slice(첫번째 매개변수 값 부터, 두번째 매개변수 바로 직전! 까지)
console.log(color.slice(1, 4));
