import { get } from "http";
import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    //set(바꾸고싶은 값,무엇으로바꿀건지)
    // set(minuteState, 10);
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
