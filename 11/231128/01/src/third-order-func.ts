import {
  FirstOrerFunc,
  SecondOrderFunc,
  ThirdOrderFunc,
} from "./function-signiture";

export const add3: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrerFunc<number, number> =>
  (z: number): number =>
    x + y + z;
