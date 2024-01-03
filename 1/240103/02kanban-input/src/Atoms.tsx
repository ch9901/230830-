import { atom, selector } from "recoil";
export interface IToDo {
  id: number;
  text: string;
}
interface IToDoState {
  [key: string]: IToDo[];
}
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: [],
    doing: [],
    done: [],
    //나중에 추가할거면
    // doLater: ["g", "h"],
  },
});
