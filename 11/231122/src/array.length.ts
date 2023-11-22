//타입변수 : type Variable

export const arrayLength = <T>(array: T[]): number => {
  return array.length;
};

export const isEmpty = <T>(array: T[]): boolean => {
  return arrayLength<T>(array) == 0;
};
