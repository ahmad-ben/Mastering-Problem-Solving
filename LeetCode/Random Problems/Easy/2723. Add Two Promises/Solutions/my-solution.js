var addTwoPromises = async function(promise1, promise2) {
  const res1 = await promise1, res2 = await promise2;

  return new Promise(res => res(res1 + res2));
};