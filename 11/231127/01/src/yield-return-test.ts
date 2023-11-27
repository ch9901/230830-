import { random, gen } from "./yield-return";
const iter = gen();
const ran = random(10, 1);
while (true) {
  const { value, done } = iter.next(ran);
  if(done)break;
  console.log(value);
}

//비동기처리방식, 제네릭타입, 대수타입, 
//함수형프로그래밍을 위한 모나드, 람다함수, 고차함수