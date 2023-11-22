const names: string[] = ["jack", "jane", "steve"];
for (let i in names) {
  const name = names[i];
  console.log(`[${i}] : ${name}`);
}

let jack = {
  name: "jack",
  age: 32,
};

for (let i in jack) {
  console.log(`[${i}] : jack[${i}]`);
}
