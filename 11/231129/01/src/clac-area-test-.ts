import { clacArea } from "./calc-area";
import { Irectangle, ICircle, ISquare } from "./interfaceex";

const square: ISquare = {
  tag: "square",
  size: 10,
};
const rectangle: Irectangle = {
  tag: "rectangle",
  width: 4,
  height: 5,
};

const circle: ICircle = {
  tag: "circle",
  radius: 10,
};

console.log(clacArea(square), clacArea(rectangle), clacArea(circle));
