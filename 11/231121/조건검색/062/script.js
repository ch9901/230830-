const userDataList = [
  { id: 1, name: "곰", age: 18 },
  { id: 2, name: "여우", age: 27 },
  { id: 3, name: "사자", age: 32 },
  { id: 4, name: "얼룩말", age: 41 },
  { id: 5, name: "기린", age: 56 },
];

const button = document.querySelectorAll(".button");
console.log(button);
const userList = document.querySelector(".user_list");
const updataList = (filteredList) => {
  let listHtml = "";
  for (let data of filteredList) {
    listHtml += `
  <li>이름 : ${data.name}, 나이 : ${data.age}</li>
  `;
    userList.innerHTML = listHtml;
  }
};

const onClickButton = (e) => {
  const button = e.target;
  const targetAge = button.dataset.age;
  const filteredList = userDataList.filter((data) => data.age >= targetAge);
  console.log(filteredList);
  updataList(filteredList);
};

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
