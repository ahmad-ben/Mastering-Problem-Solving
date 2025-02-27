/**
 * @param {string} s
 * @return {string}
 */

const isStrPalindrome = (str, leftEdge, rightEdge) => {
  while(leftEdge < rightEdge){
      if(str[leftEdge] !== str[rightEdge]) return false;
      ++leftEdge, --rightEdge;
  };

  return true;
};

var longestPalindrome = function(s) {
  let longestStrPalindrome = "";
  const edgesQueue = new Queue();

  edgesQueue.enqueue([0, s.length - 1]);

  while(!edgesQueue.isEmpty()){
      const [leftEdge,rightEdge] = edgesQueue.dequeue();

      if( rightEdge - leftEdge <= longestStrPalindrome.length) continue;

      if(isStrPalindrome(s, leftEdge, rightEdge)) {
          const currentStr = s.substring(leftEdge, rightEdge + 1);
          
          if(longestStrPalindrome.length < currentStr.length) 
              longestStrPalindrome = currentStr;

          continue;
      };

      edgesQueue.enqueue([leftEdge + 1, rightEdge]);
      edgesQueue.enqueue([leftEdge, rightEdge - 1]);
  }

  return longestStrPalindrome;
};