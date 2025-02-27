const maxProduct = (numArr) => {
  let res = numArr[0], curMin = curMax = 1;

  for (const num of numArr) {
    const tmp = curMax * num;

    curMax = Math.max(num * curMax, num * curMin, num);
    curMin = Math.min(tmp, num * curMin, num);
    res = Math.max(res, curMax);
  }
  return res;
};