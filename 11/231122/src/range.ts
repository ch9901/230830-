//range함수는 숫자로 구성 된 두개의 인자값을 받아서 두개의 숫자 사이에 값들을 모두 가지고있는 배열을 생성하는 함수
//(1,10) > [1,2,3,4,5,6,7,8,9]
export const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
};
