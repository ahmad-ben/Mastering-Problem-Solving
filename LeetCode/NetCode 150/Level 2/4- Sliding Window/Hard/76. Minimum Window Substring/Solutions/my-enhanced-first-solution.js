/**
 * @param {string} string
 * @param {string} searchedStr
 * @return {string}
 */

const minWindow = function(string, searchedStr) {
  if(string.length < searchedStr.length) return "";
  if(string === searchedStr) return string;

  let longStrObj = {}, smallStrObj = {};
  let smallestSubStr = "", leftEdge = 0, areTheyMatch = false;

  for(char of searchedStr) smallStrObj[char] = smallStrObj[char] + 1 || 1;

  for (let rightEdge = 0; rightEdge < string.length; rightEdge++) {
    longStrObj[string[rightEdge]] = (longStrObj[string[rightEdge]] + 1 || 1);

    while(
      !smallStrObj[string[leftEdge]] && leftEdge <= rightEdge|| 
      longStrObj[string[leftEdge]] > smallStrObj[string[leftEdge]]
    ){
      --longStrObj[string[leftEdge]];
      ++leftEdge;
    };

    for(char in smallStrObj){
      if(longStrObj[char] >= smallStrObj[char]) areTheyMatch = true;
      else{
        areTheyMatch = false;
        break;                
      }
    };

    if(!areTheyMatch) continue;

    if(
      smallestSubStr.length === 0 || 
      smallestSubStr.length > rightEdge - leftEdge + 1
    ){
      smallestSubStr = "";
      for(i = leftEdge; i <= rightEdge; i++) 
        smallestSubStr = smallestSubStr + string[i];
    };

    --longStrObj[string[leftEdge]];
    ++leftEdge;
  };

  return smallestSubStr
};

console.log(minWindow("ADOBECODEBANC", "ABC"));