class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}에 구매하였습니다`);
  }
}
const book1 = new BookC("타입스크립트", 10000);
book1.buy();

//다른클래스에서 위의 클래스 가저와서 사용하기
class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextBook() {
    console.log(`${this.major}전공서적 ${this.title}을 구매했습니다`);
  }
}

const book2 = new TextBookC("html", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();
