var isInterleave = function(s1, s2, s3) {
  if(s1.length + s2.length !== s3.length) return false;

  checkCurrIndices = (s1Idx, s2Idx, s3Idx) => {
    if(s1Idx === s1.length && s2Idx === s2.length) return true;
    if(s3Idx === s3.length) return false;

    let res1 = res2 = false;
    if(s1[s1Idx] === s3[s3Idx]) 
      res1 = checkCurrIndices(s1Idx + 1, s2Idx, s3Idx + 1);
    if(s2[s2Idx] === s3[s3Idx]) 
      res2 = checkCurrIndices(s1Idx, s2Idx + 1, s3Idx + 1);

    return res1 || res2;
  };

  return checkCurrIndices(0, 0, 0);
};