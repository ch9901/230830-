class Book {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("뽀로로", 10000);
book1.buy();

class TextBook {
  constructor(title, price, major) {
    Book.call(this, title, price);
    this.major = major;
  }
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major}전공서적, ${this.title}을 구매했습니다.`);
};

let book3 = new TextBook("타입스크립트", 20000, "컴퓨터공학");

book3.buyTextBook();
