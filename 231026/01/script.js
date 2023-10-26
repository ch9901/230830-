class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는중") : (str = "완독");
  return str;
};

const book1 = new Book("자바스크립트", 648, done);
console.log(Book);
