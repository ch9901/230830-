// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }
// function displayD() {
//   console.log("D");
// }

// displayA();
// displayB();
// displayC();
// displayD();

// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   setTimeout(() => {
//     console.log("b");
//   }, 2000);
// }
// function displayC() {
//   setTimeout(() => {
//     console.log("C");
//   }, 3000);
// }
// function displayD() {
//   console.log("D");
// }

// displayA();
// displayB();
// displayC();
// displayD();

function displayA() {
  console.log("A");
}

function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
}

function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);
