// type func1 = () => string;
// const makeNames = (): string => "hello";

//위의 함수를 시그니처 방식으로 정의한다면?
const makeNames = (): (() => string) => {
  const names = ["jack", "jane", "smith"];
  let index = 0;

  return (): string => {
    if (index === names.length) {
      index = 0;
    }
    return names[index++];
  };
};

const arr = [1, 2, 3, 4, 5];
const makeName: () => string = makeNames();
console.log(arr.map((number) => makeName()));
