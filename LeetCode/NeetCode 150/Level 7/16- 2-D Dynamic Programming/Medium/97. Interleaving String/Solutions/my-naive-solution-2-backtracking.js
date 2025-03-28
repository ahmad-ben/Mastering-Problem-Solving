var isInterleave = function(s1, s2, s3) {
  const firstStrLength = s1.length, secondStrLength = s2.length;
  if(firstStrLength + secondStrLength !== s3.length) return false;

  const generateInterleave = (currChar, str1Idx, str2Idx) => {
    if(currChar && currChar !== s3[str1Idx + str2Idx - 1]) return false;
    if(str1Idx === firstStrLength && str2Idx === secondStrLength) return true;
    if(str1Idx > firstStrLength || str2Idx > secondStrLength) return false;

    return (
      generateInterleave(s1[str1Idx], str1Idx + 1, str2Idx) ||
      generateInterleave(s2[str2Idx], str1Idx, str2Idx  + 1)
    ); 
  };

  return generateInterleave("", 0, 0); 
};