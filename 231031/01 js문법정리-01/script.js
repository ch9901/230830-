//익명함수, 화살표함수 라고 칭함
const hello = (name, message = "안녕하세요") => {
  // console.log(`${name}님 ${message}`);
};

///////////////////////////////////////////

const addNum = (a, b) => {
  let sum = 0;
  sum += a;
  sum += b;
  return sum;
};

const addNum01 = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

/////////////////////////////////////////////////

//concat()내장함수를 사용하여 서로다른 배열을 합치기
const animals = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

let sum01 = animals.concat(fruits);
// console.log(sum01);

//전개연산자를 사용하여 서로다른 배열을 합치기
let sum02 = [...animals, ...fruits];
// console.log(sum02);

//////////////////////////////////////////////////

//원시타입 복사 & 주소타입복사

let take01 = "red";
let take02 = take01;

// console.log(take01);
// console.log(take02);

//take02를 blue로 수정한다해도 take01과 동일시되어 take01 값이 바뀌지는않음
take02 = "blue";
// console.log(take01);
// console.log(take02);

let obj01 = {
  title: "js",
  page: 360,
};

// console.log(obj01);

let obj02 = obj01;
// console.log(obj02);

//02요소의 title를 바꿨는데도 원본데이터의 값도 변경되었음
//->
obj02.title = "ts";
// console.log(obj01);

//////////////////////////////////////////////////////

const mine = [...fruits];
// console.log(mine);

mine[1] = "orange";

//orange로 바뀜
// console.log(mine);

//orange로 바뀌지않고 원본데이터 그대로
// console.log(fruits);

//만약 fruits원본을 할당시킨다면 mine02를 바꾸면 원본데이터도 값이 바뀐다 !!
const mine02 = fruits;
mine02[1] = "watermelon";
// console.log(fruits);

////////////////////////////////////////////////////

//객체 프로퍼티 & 키 & 값

const book = {
  title: "javascript",
  page: 500,
};
// console.log(book);

//새로운 키:값 온점표기법으로 할당
book.author = "park";
// console.log(book);

// book.published date="2023-10" 띄어쓰기 허용 불가
//만약 띄어쓰기가 있는 key값을 만들고싶다면, 대괄호표기법을 사용해서 할당시키면 할 수 있다!
book["published book"] = "2023-10";
// console.log(book);

/////////////////////////////////////////////////////

//객체축약법

let user = {
  name: "도레미",
};

user.age = 20;
// console.log(user);

//인자값과 키 값이 같다면 ?
let makeUser = (name, age) => {
  return {
    name,
    age,
    // name: name,
    // age: age,
  };
};

let user01 = makeUser("전찬영", 25);
// console.log(user01);
//객체를 생성하는데에 키와 밸류의 이름이 동일 한 경우 name:name, age:age; -> name, age으로 축약가능

//////////////////////////////////////////////////

//객체 > 심볼 symbol : 유일성을 보장하는 값을 생성하고 싶을 때 사용. 주로 여러 개발자들이 공통의 프로젝트를 진행 할 때 객체의 키 이름이 중복 될 것을 미연에 방지하고자 할 때

let var1 = Symbol();
let var2 = Symbol();

// console.log(var1 === var2); //false

let id = Symbol();

const member = {
  name: "park",
  [id]: 12345,
};

// console.log(member);

// console.log(member[id]);

//위에 symbol로 정의한 id와 다르게 인식함
member.id = 7687;
// console.log(member);

//symbol에 이름부여! > 협업시 다른 개발자들도 인식 할 수 있게끔
let grade = Symbol("grade");
member[grade] = "VIP";
// console.log(member);

/////////////////////////////////////////////////

//객체에서 symbol키 활용하는 방법

const id01 = Symbol("id");
const tel01 = Symbol("telephone number");

const member02 = {
  name: "park",
  age: 20,
  [id01]: 1234,
  [tel01]: function () {
    alert(prompt(`전화번호`));
  },
  //객체안에 함수는 메서드라고 부름ㄴ
};

// console.log(member02);
// console.log(member02[id01]);
// console.log(member02[tel01]());
//symbol로 만든 메서드를 호출하는방법임!

//전역심볼로 만들고 싶을 때 Symbol.for()
let tel = Symbol.for("tel");
let phone = Symbol.for("tel");

// console.log(tel === phone);

//전역심볼로 생성 된 심볼의 키를 가져오려면?
// console.log(Symbol.keyFor(phone));

////////////////////////////////////////////////////

//구조분해할당
const fruits01 = ["사과", "복숭아"];

// let apple = fruits01[0];
// let peach = fruits01[1];
// console.log(apple, peach);
//위 형태로 하면 생고생해야하니까 구조분해할당을 쓰는거임

//구조분해할당-배열편
let [apple, peach] = ["사과", "복숭아"];
// console.log(apple, peach);

//할당받을 변수가 비어있다면?
let [spring, , fall] = ["봄", "여름", "가을", "겨울"];
// console.log(spring, fall);

//할당 받을 변수가 적다면? 해당 갯수만큼만 할당된다
let [teacher] = ["kim", "lee", "park", "choi"];
// console.log(teacher);

//전개연산자를 붙여서 변수를 넣는다면 남는 요소들을 배열타입으로 할당된다.
let [teacher01, ...students] = ["kim", "lee", "park", "choi"];
// console.log(students);

let x = 10;
let y = 20;

// console.log(([x, y] = [y, x]));
// console.log(x);

/////////////////////////////////////////////////////

//구조분해할당-객체편

const member01 = {
  name: "kim",
  age: 25,
};

let name01 = member01.name;
// console.log(name01);

//객체축약법 & 구조분해할당 융합
let { name, age } = member01;
// console.log(age);

let student = {
  name02: "아이유",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};
let {
  name02,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

// console.log(name02);
// console.log(history);
// console.log(science);

////////////////////////////////////////////////////

//배열의 변칙성 메서드
//배열 메서드 slice, splice -> 규칙성
//배열자체의 속성을 변경
// map(), filter(), reduce()
