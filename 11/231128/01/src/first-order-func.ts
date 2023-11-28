import { FirstOrerFunc } from "./function-signiture";

export const inc: FirstOrerFunc<number, number> = (x: number): number => x + 1;
