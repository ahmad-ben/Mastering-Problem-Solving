const isStrPalindrome = (str, leftEdge, rightEdge) => {
  while(leftEdge < rightEdge){
      if(str[leftEdge] !== str[rightEdge]) return false;
      ++leftEdge, --rightEdge;
  };

  return true;
};

var longestPalindrome = function(s) {
  const strPalindromeMem = {}; let longestStrPalindrome = "";

  const checkStr = (leftEdge, rightEdge) => {
      if(rightEdge - leftEdge <= longestStrPalindrome.length) return;

      if(leftEdge > rightEdge) return;

      if(strPalindromeMem[`${leftEdge},${rightEdge}`]) return;

      if(isStrPalindrome(s, leftEdge, rightEdge)) {
          strPalindromeMem[`${leftEdge},${rightEdge}`] = true;
          
          const currentStr = s.substring(leftEdge, rightEdge + 1);
          
          if(longestStrPalindrome.length < currentStr.length) 
              longestStrPalindrome = currentStr;

          return;
      };

      checkStr(leftEdge + 1, rightEdge);
      checkStr(leftEdge, rightEdge - 1);
  };

  checkStr(0, s.length - 1);
  return longestStrPalindrome;
};