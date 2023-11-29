import { create } from "./factory";

class point {
  constructor(public x: number, public y: number) {}
}
[create(Date)].forEach((s) => console.log(s));

[create(Date), create(point, 0, 0)].forEach((s) => console.log(s));
