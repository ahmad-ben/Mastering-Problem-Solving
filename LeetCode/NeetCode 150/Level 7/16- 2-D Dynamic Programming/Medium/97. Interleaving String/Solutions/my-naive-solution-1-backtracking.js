var isInterleave = function(s1, s2, s3) {
  const firstStrLength = s1.length, secondStrLength = s2.length;
  if(firstStrLength + secondStrLength !== s3.length) return false;

  const generateInterleave = (currStr, str1Idx, str2Idx) => {
    if(str1Idx > firstStrLength || str2Idx > secondStrLength) return false;
    if(currStr.length >= s3.length) return currStr === s3;
    
    currStrLastChar = currStr[currStr.length - 1];
    if(currStrLastChar !== s3[currStr.length - 1]) return false;

    return (
      generateInterleave(currStr + s1[str1Idx], str1Idx + 1, str2Idx) ||
      generateInterleave(currStr + s2[str2Idx], str1Idx, str2Idx  + 1)
    ); 
  };

  return generateInterleave("", 0, 0); 
};