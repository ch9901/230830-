// function displayHello() {
//   console.log("hello");
// }
// displayHello();
//js 비동기처리방식 -> callback함수 -> 불편함 해결 -> promise객체:response, reject -> then(), catch(), finally()
//fetch() : promise -> then(), catch()
//async, await

// async function displayHello01() {
//   console.log("hello01");
// }
// displayHello01();

// //promise 객체를 활용 한 비동기처리방식 코드

// function whatsYoutFavorite() {
//   let fav = "javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`hello ${subject}`));
// }
// whatsYoutFavorite().then(displaySubject).then(console.log);

//위 코드를 async와 await으로 변환한다면

// async function whatsYoutFavorite() {
//   let fav = "Typescript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `hello ${subject}`;
// }

// whatsYoutFavorite().then(displaySubject).then(console.log);

async function whatsYoutFavorite() {
  let fav = "Nodejs";
  return fav;
}

async function displaySubject(subject) {
  return `hello ${subject}`;
}

//비동기적으로 실행문을 처리하는 방식의 함수
//비동기적으로 처리할 때, 유의사항
//아무리 실행문을 비동기적으로 처리한다고해도, 우선처리실행을 해야하는 코드가 있다면, 반드시 해당 실행문을 먼저 처리 후 다음번 코드를 실행하게끔 해야한다.
//해당 순서를 정해주는게 await ->얘가 붙으면 얘가 붙은 순서대로 실행함

async function init() {
  const response = await whatsYoutFavorite();
  const result = await displaySubject(response);
  console.log(result);
}
init();

// async function init01() {
//   const response = whatsYoutFavorite();
//   const result = displaySubject(response);
//   console.log(result);
// }
// init01();
