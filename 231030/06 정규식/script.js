//정규식
let regexp = /\d{3}/;
//숫자 세 자리 라는 패턴을 regexp라는 변수에 할당하고, 표현식을 사용하겠다.

console.log(regexp.test("123")); //true
console.log(regexp.test("hello")); //false

//위에 regexp를 내장객체함수로 선언한거임 똑같은거임
let regexp01 = new RegExp(/\d{3}/);
console.log(regexp01.test("8976")); // 세자리 아닌데 왜 트루지

let str = "ES2015 is powerfull";
str.match(/ES6/);
//.match() -> 문자열에서 정규표현식에 일치하는 부분을 찾아라 라는 메서드(함수)
console.log(str.match(/is/));
console.log(str.match(/ES6/));

//ES2015를 ES6로 바꿔달라
// str.replace(/ES2015/, "ES6");
console.log(str.replace(/ES2015/, "ES6"));

//es를 찾아달라
console.log(/es/.test(str)); //false
//정규표현식에서 i의 의미는 대소문자를 가리지 않고 검색해서 찾아라
console.log(/es/i.test(str));

//\d이라는 문자가 붙으면 붙은 개수대로 뒤의 문자를 찾아온다.
console.log(str.match(/ES\d\d\d\d/));
console.log(str.match(/ES/));

//
let hello = "Hello, everyone";
// ^ -> 캐럿 : 특정단어로 시작하는걸 확인 할 때
console.log(/^H/.test(hello)); //true
console.log(/^h/.test(hello)); //소문자로 시작해서 false
console.log(/^h/i.test(hello)); //i를 사용했기에 소문자라도 true

// $ -> 캐럿과 반대
console.log(/one$/.test(hello)); // one 으로 끝나므로 true
console.log(/e$/.test(hello)); // e 으로 끝나므로 true

// ^ : 특정 문자열 앞에 붙으면 해당 문자로 시작하는지 여부를 확인하는데, 만약 ^(캐럿)이 대괄호 안에서 사용된다면 반대의 의미를 갖게 된다.
"ES2015".match(/[^0-9]/g);
//ES2015에서 찾아줘(match) 0-9에서 반대되는 것들을 /g -> 모~든요소들 (문자, 숫자 막론하고)
console.log("ES2015".match(/[^0-9]/g));

let str02 = "Oooops";

// 소문자 o가 두번 연타로 나오는 애를 출력시켜줘
console.log(str02.match(/o{2}/));
// 소문자 o가 두번 이상으로 나오는 애를 출력시켜줘
console.log(str02.match(/o{2,}/));

// 대소문자 구분없이(i) o가 2번이상 4번까지 나오는 애를 출력시켜줘
console.log(str02.match(/o{2,4}/i));

let str03 = "ES2015(ES6) is powerful";
let regexp02 = /ES2015|ES6/; // ES2015 또는 ES6
regexp02.test(str03); //regexp02에 str03이 있는지
console.log(regexp02.test(str03)); // true

//정규식에서 숫자의 패턴만 찾아오고 싶을 때
/^[0-9]+$/;

//정규식에서 양의 정수의 패턴만 찾아오고 싶을 때
/^[1-9]\d*$/;
