import { Bird, Fish } from "./BirdAndFish";
import { flyorswim } from "./flyorswim";

const birdT = new Bird();
const fishT = new Fish();
console.log(birdT.fly(), fishT.swim());

[birdT, fishT].forEach(flyorswim);
