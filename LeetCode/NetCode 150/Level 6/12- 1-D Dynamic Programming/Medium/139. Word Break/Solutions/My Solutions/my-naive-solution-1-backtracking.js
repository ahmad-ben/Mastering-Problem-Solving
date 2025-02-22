var wordBreak = function(s, wordDict) {
  const memObj = {};

  checkCurrStr = (currStr) => {
    if(currStr.length > s.length) return false;

    if(currStr.length === s.length)
      if(currStr === s) return true; else return false;

    for(let currWord of wordDict)
      if(checkCurrStr(`${currStr}${currWord}`)) return true;

    return false;
  };

  return checkCurrStr("");
};