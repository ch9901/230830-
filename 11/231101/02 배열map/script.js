// let arr = [1, 2, 3, 4, 5];
// let obg = {
//   title: "test",
//   author: "park",
//   read: function () {
//     console.log(`${title}`);
//   },
// };

let bag = new Map();
console.log(bag);

bag.set("color", "red");
console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["haveHandle", "true"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);
console.log(myCup.size);
let arr = [100, 200, 300];
console.log(typeof arr);
