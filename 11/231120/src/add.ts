export type NumToNumFunc = (arg0: number) => number;

export const add = (a: number): NumToNumFunc => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
};

