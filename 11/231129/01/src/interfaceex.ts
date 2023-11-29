export interface ISquare {
  tag: "square";
  size: number;
}

export interface Irectangle {
  tag: "rectangle";
  width: number;
  height: number;
}
export interface ICircle {
  tag: "circle";
  radius: number;
}

// const square: ISquare = {
//   size: 10,
// };
// const rectangle: Irectangle = {
//   width: 4,
//   height: 5,
// };

// const circle: ICircle = {
//   radius: 10,
// };

export type IShape = ISquare | Irectangle | ICircle;

const clacArea = (shape: IShape): number => {
  return 1 + 1;
};
