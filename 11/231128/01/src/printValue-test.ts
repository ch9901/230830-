import { printValue, Valueable, IValuable } from "./printValue";

printValue(new Valueable<number>(1));
printValue(new Valueable<boolean>(true));
printValue(new Valueable<string>("hello"));
printValue(new Valueable<number[]>([1, 2, 3, 4, 5]));