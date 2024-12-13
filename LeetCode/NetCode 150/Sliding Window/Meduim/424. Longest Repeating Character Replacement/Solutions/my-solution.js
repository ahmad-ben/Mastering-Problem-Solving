/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let leftEdge = 0, rightEdge = 0, longestUniqueStr = 0,  notCurChar = 0;
  let charFreCounter = {};

  for(rightEdge = 0; rightEdge < s.length; rightEdge++){
    const leftChar = s[leftEdge], rightChar = s[rightEdge];
    charFreCounter[rightChar] = charFreCounter[rightChar] + 1 || 1;
    notCurChar = (rightEdge - leftEdge + 1) - charFreCounter[leftChar];

    if(notCurChar >= k){
      if(notCurChar === k){
        while(s[rightEdge + 1] === leftChar){
          ++charFreCounter[leftChar];
          ++rightEdge;
        };

        longestUniqueStr = Math.max(longestUniqueStr, rightEdge - leftEdge + 1);
      }
      --charFreCounter[leftChar];
      ++leftEdge;
    };
  };

  for(const fre of Object.values(charFreCounter)){
    longestUniqueStr = Math.max(longestUniqueStr, Math.min(s.length, fre + k));
  }

  return longestUniqueStr;
};