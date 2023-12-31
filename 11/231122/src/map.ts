//js에서 map함수는 언제 사용할가요? map(): 반복실행 후 실행 된 것을 새로운 배열로 만들고 싶을 때 → map 메서드 안에 정의한 커스텀 조건식에 따라서 새로운 배열을 만들어주는 역할

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  return result;
};
