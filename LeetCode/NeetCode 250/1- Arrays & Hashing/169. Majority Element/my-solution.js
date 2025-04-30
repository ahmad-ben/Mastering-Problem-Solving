const majorityElement = (numArr) => {
  numArr.sort((a, b) => a - b);
  return numArr[Math.floor(numArr.length / 2)]
};