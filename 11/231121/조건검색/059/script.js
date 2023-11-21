//오름차순 내림차순 어떻게 정렬하는가?
//sort()쓰면 맨 앞자리 숫자 작은순으로 정렬해줌 -> 정렬기준:아스키문자를기준으로 정렬시킴
// const number = [10, 3, 6, 4, 2];
// // console.log(number.sort());

// const number02 = [10, 3, 6, 4, 2];
// const compare02 = (a, b) => {
//   return a - b;
// };

// const compare03 = (a, b) => {
//   return b - a;
// };

// number02.sort(compare02);
// console.log(number02);
// number02.sort(compare03);
// console.log(number02);

const userData = [
  { id: 2, name: "곰" },
  { id: 10, name: "여우" },
  { id: 7, name: "사자" },
  { id: 9, name: "펭귄" },
  { id: 11, name: "호랑이" },
];

const upbutton = document.querySelector(".ascending");
const downbutton = document.querySelector(".descending");
const userList = document.querySelector(".user_list");

const updateList = () => {
  userList.innerHTML = "";
  let listHtml = "";
  for (let data of userData) {
    listHtml += `
<li>${data.id} : ${data.name}</li>
`;
  }
  userList.innerHTML += listHtml;
};

const sortByascending = (a, b) => {
  userData.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
};

const sortBydescending = (a, b) => {
  userData.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
};

userData.forEach((data) => {
  console.log(data.id);
});

console.log(userData[0].id);
let userId = userData.id;

upbutton.addEventListener("click", () => {
  sortByascending();
});

downbutton.addEventListener("click", () => {
  sortBydescending();
});
