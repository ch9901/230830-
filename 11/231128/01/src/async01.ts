// async function test() {} // 같은거임!
const test = async () => {
  const value = await Promise.resolve(1);
  console.log(value);
};
test()