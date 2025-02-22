var wordBreak = function(s, wordDict) {
  const memArr = Array.from({length: s.length}, () => false);
  memArr[s.length] = true;

  for(let charIdx = s.length - 1; charIdx >= 0; --charIdx){

    for(let dicWord of wordDict){
      const dicWordLength = dicWord.length; 
      const strPart = s.substring(charIdx, charIdx + dicWordLength);

      if(strPart !== dicWord || !memArr[charIdx + dicWordLength]) continue;

      memArr[charIdx] = memArr[charIdx + dicWordLength];
      break;
    };
  }

  return memArr[0];
};