import { atom, selector } from "recoil";
interface IToDoState {
  [key: string]: string[];
}
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: ["a", "b", "c"],
    doing: ["d", "e"],
    done: ["f"],
    //나중에 추가할거면
    // doLater: ["g", "h"],
  },
});
