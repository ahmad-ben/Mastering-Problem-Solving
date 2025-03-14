var buildArray = function(numArr) {
  const ans = [];
  for(let num of numArr) ans[num] = numArr[numArr[num]];
  return ans;
};