export const mergeArray = <T>(...arrays: T[][]):T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    let array = arrays[i];
    result = [...result, ...array];
  }
  return result;
};
