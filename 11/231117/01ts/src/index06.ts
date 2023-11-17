//함수에대한 타입 정의방법
//함수표현식 => 고차함수 접근
//세상에 모든코드가 객체지향의 친절한 형태로 개발되지는 않기 때문

//우리가 그동안 함수를 사용할때마다
//function() / let test =()=>
//원칙적으로 함수를 선언하기
let add = new Function("a", "b", "return a+b");
//-> 함수는 객체이다.

let result = add(1, 2);
console.log(result);
