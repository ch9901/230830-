import { Bird, Fish } from "./BirdAndFish";

export const isflyable = (o: Bird | Fish): o is Bird => {
  return o instanceof Bird;
};
