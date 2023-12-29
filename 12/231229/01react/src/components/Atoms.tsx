import { atom, selector } from "recoil";

//카테고리에 들어갈 타입 정의 >> 오타방지
//enumberable >> 열거할 수 있는, 셈이 가능한 ..
export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

//atom 은 객체형태로 관리함
//key >> 이 값을 관리하는 애야
//default >> 기본 값>배열안에 객체로 관리 될것이기 때문이다.
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "DOING")
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "DONE")
    //   return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
