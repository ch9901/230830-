import { ResultType } from "./reesultType";
export const doSomething = (): ResultType => {
  try {
    throw new Error("some error occurd...");
  } catch (e) {
    return [false, e.message];
  }
};
