import { Bird, Fish } from "./BirdAndFish";

//어떤 타입을 쓰냐에 따라 결과값이 달라지므로 해당 타입에대한 가드가 필요함
export const flyorswim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    (o as Bird).fly();
  } else if (o instanceof Fish) {
    (o as Fish).swim();
  }
};

