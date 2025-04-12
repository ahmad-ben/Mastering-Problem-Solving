const singleNumber = (numArr) => {
  let res = 0;

  for (const num of numArr) res ^= num;

  return res;
};