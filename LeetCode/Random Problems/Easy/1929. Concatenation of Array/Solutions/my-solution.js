var getConcatenation = function(numArr) {
  const ans = [];

  for(let i = 0; i < numArr.length; ++i) 
    ans[i] = ans[i + numArr.length] = numArr[i];

  return ans;
};