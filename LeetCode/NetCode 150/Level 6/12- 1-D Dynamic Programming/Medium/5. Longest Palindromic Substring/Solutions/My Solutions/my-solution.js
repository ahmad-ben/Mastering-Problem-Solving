var longestPalindrome = function(s) {
  let longestPalindromeStr = "";

  for(let charIdx = 0; charIdx < s.length; ++charIdx){
    let leftEdge = rightEdge = charIdx;

    while(
      leftEdge >= 0 && rightEdge < s.length && s[leftEdge] === s[rightEdge]
    ){
      if(rightEdge - leftEdge + 1 > longestPalindromeStr.length)
        longestPalindromeStr = s.substring(leftEdge, rightEdge + 1);
      --leftEdge, ++rightEdge;
    }

    leftEdge = charIdx, rightEdge = charIdx + 1;

    while(
      leftEdge >= 0 && rightEdge < s.length && s[leftEdge] === s[rightEdge]
    ){
        if(rightEdge - leftEdge + 1> longestPalindromeStr.length)
          longestPalindromeStr = s.substring(leftEdge, rightEdge + 1);
        --leftEdge, ++rightEdge;
    }
  };

  return longestPalindromeStr;
};