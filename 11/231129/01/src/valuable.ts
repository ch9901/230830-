import { IValuable } from "./printValue";

export class valuable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

export{IValuable}
