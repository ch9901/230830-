import { FirstOrerFunc, SecondOrderFunc } from "./function-signiture";

export const add: SecondOrderFunc<number, number> =
  (x: number): FirstOrerFunc<number, number> =>
  (y: number): number =>
    x + y;
