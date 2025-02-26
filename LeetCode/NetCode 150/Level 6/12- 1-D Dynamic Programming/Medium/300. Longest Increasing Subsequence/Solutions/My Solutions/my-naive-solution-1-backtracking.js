var lengthOfLIS = function(numArr) {
  let longestSubseq = currSubsequenceLength = 1;

  const checkCurrIdx = (bigVal, nextIdx) => {
    if(nextIdx >= numArr.length || numArr[nextIdx] <= bigVal) return;

    ++currSubsequenceLength;
    longestSubseq = Math.max(longestSubseq, currSubsequenceLength);

    for(let comingIdx = nextIdx + 1; comingIdx < numArr.length; ++comingIdx)
      checkCurrIdx(numArr[nextIdx], comingIdx);

    --currSubsequenceLength;
  };

  for(let idx = 0; idx < numArr.length; ++idx)
    for(let nextIdx = idx + 1; nextIdx < numArr.length; ++nextIdx){
      currSubsequenceLength = 1;
      checkCurrIdx(numArr[idx], nextIdx);
  }

  return longestSubseq;
};