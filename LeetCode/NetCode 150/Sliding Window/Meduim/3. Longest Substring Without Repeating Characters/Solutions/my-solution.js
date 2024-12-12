/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let leftEdge = 0, maxVal = 0, charObj = {};

  for(rightEdge = 0; rightEdge < s.length; rightEdge++){
    const rightChar = s[rightEdge];

    if(charObj[rightChar] >= leftEdge){
      maxVal = Math.max(maxVal, rightEdge - leftEdge);
      leftEdge = charObj[rightChar] + 1;
    }

    charObj[rightChar] = rightEdge;           
  }

  maxVal = Math.max(maxVal, rightEdge - leftEdge);

  return maxVal;
};