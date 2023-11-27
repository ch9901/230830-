//js -> 객체지향언어
//우리가 알고있는 js의 요소는 객체롬 만들어져있다.
//핵심 -> class생성자를 활용해서 우리 역시 객체를 만들어 낼 수 있다.
//class 생성자를 활용해서 이터러블한 객체도 만들어낼 수 있지 않을 까?

export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(public values: T[] = [], public currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++];
    }
  };
}
