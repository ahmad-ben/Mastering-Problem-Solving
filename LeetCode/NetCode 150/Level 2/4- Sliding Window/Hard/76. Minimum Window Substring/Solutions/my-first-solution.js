/**
 * @param {string} string
 * @param {string} searchedStr
 * @return {string}
 */

/*
  After more than 3 hours i solve the problem, but it's:
    Too long.
    O(n) but isn't very efficient.
*/

const minWindow = function(string, searchedStr) {
  if(string.length < searchedStr.length) return "";

  if(string === searchedStr) return string;

  let longStrObj = {}, smallStrObj = {}, smallestSubStr = "";
  let leftEdge = 0, rightEdge = 0;
  let areTheyMatch = false;


  for(char of searchedStr) smallStrObj[char] = smallStrObj[char] + 1 || 1;

  while(rightEdge < string.length){
    const leftChar = string[leftEdge], rightChar = string[rightEdge];

    longStrObj[rightChar] = (longStrObj[rightChar] + 1 || 1); 

    if(
      rightChar === leftChar && 
      longStrObj[leftChar] === smallStrObj[rightChar] + 1
    ){
      --longStrObj[leftChar];
      ++leftEdge;
      while(
        !smallStrObj[string[leftEdge]] || 
        longStrObj[string[leftEdge]] > smallStrObj[string[leftEdge]]
      ){
        --longStrObj[string[leftEdge]];
        ++leftEdge;
      }
      ++rightEdge;
      continue;
    }

    if(smallStrObj[leftChar] === undefined){
      --longStrObj[leftChar];
      ++leftEdge;
      ++rightEdge;
      continue;
    };

    if(rightEdge - leftEdge + 1 < searchedStr.length){
      ++rightEdge;
      continue;
    }

    for(char in smallStrObj){
      if(longStrObj[char] >= smallStrObj[char]) areTheyMatch = true;
      else{
        areTheyMatch = false;
        ++rightEdge;
        break;                
      }
    };

    if(!areTheyMatch) continue;

    if(smallestSubStr.length === 0 || smallestSubStr.length > rightEdge - leftEdge + 1){
      smallestSubStr = "";
      for(i = leftEdge; i <= rightEdge; i++)
        smallestSubStr = smallestSubStr + string[i]; 
    }

    --longStrObj[leftChar];
    ++leftEdge;
    while(
      !smallStrObj[string[leftEdge]] && leftEdge <= rightEdge|| 
      longStrObj[string[leftEdge]] > smallStrObj[string[leftEdge]]
    ){
      --longStrObj[string[leftEdge]];
      ++leftEdge;
    }

    ++rightEdge;
  }
  return smallestSubStr
};