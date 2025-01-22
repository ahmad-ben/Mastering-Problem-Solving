const subsetsWithDup = (numArr) => {
  numArr.sort((a, b) => a - b);
  const res = new Set();
  backtrack(res, numArr, 0, []);
  return Array.from(res).map(subset => JSON.parse(subset));
}

const backtrack = (res, numArr, i, subset) => {
  if (i === numArr.length) return res.add(JSON.stringify(subset));

  subset.push(numArr[i]);
  backtrack(res, numArr, i + 1, subset);

  subset.pop();
  backtrack(res, numArr, i + 1, subset);
};