let array1: number[] = [1];
let array2: number[] = [2, 3];

//서로다른 2개 이상의 복수의 배열ㅇ르 하나의 배열로 합치는 여러가지 방법들
//1. 전개연산자 ...

let mergeArr: number[] = [...array1, ...array2];
console.log(mergeArr);
