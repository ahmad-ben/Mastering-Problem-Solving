const checkInclusion = (s1, s2) => {
  if(s1.length > s2.length) return false;
  
  let s1CharInfo = {}, s2CharInfo = {}, leftEdge = 0;

  for(char of s1) s1CharInfo[char] = s1CharInfo[char] + 1 || 1;

  for(let rightEdge = 0; rightEdge < s2.length; rightEdge++){
    const rightChar = s2[rightEdge];

    s2CharInfo[rightChar] = s2CharInfo[rightChar] + 1 || 1;

    if(rightEdge - leftEdge + 1 < s1.length) continue;

    for(char in s1CharInfo){
      if(s1CharInfo[char] !== s2CharInfo[char]){
        --s2CharInfo[s2[leftEdge]];
        ++leftEdge;
        break;
      }
    };

    if (rightEdge - leftEdge + 1 === s1.length) return true;
  };

  return false;
};