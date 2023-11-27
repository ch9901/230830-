import { IterableUsingGenerator } from "./iterableUsingGenerator";

let arr=[1,2,3]

const test=new IterableUsingGenerator(arr)
for(let item of test){
  console.log(item);
}