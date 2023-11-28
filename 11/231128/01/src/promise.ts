//node모듈 중 하나, fs -> filesystem 약어
import { readFileSync, readFile } from "fs";
console.log("read Package.json using synchronous api...");

const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());

const readFilePromise = (fileName: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    readFile(fileName, (error: Error, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

(async () => {
  const content = await readFilePromise("./package.json");
  console.log("read package.json using Promise and async/await...");
  console.log(content);
})();
