"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc = (value, cb) => {
    let add = (a, b) => a + b;
    function multiply(a, b) {
        return a * b;
    }
    let result = multiply(add(1, 2), value);
    cb(result);
};
calc(30, (result) => console.log(`result is ${result}`));
//# sourceMappingURL=nested.js.map