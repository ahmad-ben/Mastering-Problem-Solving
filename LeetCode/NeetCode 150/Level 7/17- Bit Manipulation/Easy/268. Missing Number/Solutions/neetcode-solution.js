const missingNumber = (numArr) => {
  let res = numArr.length;

  for (let i = 0; i < numArr.length; i++)  res += i - numArr[i];

  return res;
};