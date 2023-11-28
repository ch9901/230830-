//고차함수에 대한 타입정의
export type FirstOrerFunc<T, R> = (arg: T) => R;
export type SecondOrderFunc<T, R> = (arg: T) => FirstOrerFunc<T, R>;
export type ThirdOrderFunc<T, R> = (arg: T) => SecondOrderFunc<T, R>;
