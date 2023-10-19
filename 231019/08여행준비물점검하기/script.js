let itemList = [];

let addBtn = document.querySelector("#add");

let addList = (e) => {
  e.preventDefault();
  let item = document.querySelector("#item").value;
  if (item !== null) {
    itemList.push(item);
    // console.log(itemList);
    //입력하면 값 지우기
    document.querySelector("#item").value = "";
    //입력하고 값 지워지면 다시 autofocus
    document.querySelector("#item").focus();
  }
  showList();
};

addBtn.addEventListener("click", addList);

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
  }

  list += "</ul>";
  document.querySelector("#item-list").innerHTML = list;
  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", addList);
  }
}

function removeList() {
  let id = this.getAttribute("id");
  console.log(id);
  itemList.splice(id, 1);
  showList();
}
