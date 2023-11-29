import { printValueT, IValuable } from "./printValue";
import { valuable } from "./valuable";

printValueT(new valuable(1));
printValueT({ value: true });
