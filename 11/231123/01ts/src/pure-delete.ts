export const pureDelete = <T>(
  array: readonly T[],
  cb: (val: T, i?: number) => boolean
): T[] => {
  return array.filter((val: T, i) => cb(val, i) == false);
};
