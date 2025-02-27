var wordBreak = function(s, wordDict) {
  let memObj = {}, memArr = [];

  checkCurrStr = (currStr, originalWord) => {
    console.log("memArr", memArr)
    console.log("memObj", memObj)
    if(currStr.length > s.length) return false;

    if(currStr.length === s.length)
      if(currStr === s) return true; else return false;

    memArr.push(currStr); 

    for(let currWord of wordDict){
      if(memObj[currWord]){
        for(let combination of memObj[currWord])
          if(checkCurrStr(`${currStr}${combination}`)) return true;
      }else
        if(checkCurrStr(`${currStr}${currWord}`)) return true;
    }

    return false;
  };

  for(let currWord of wordDict){
    if(checkCurrStr(currWord, currWord)) return true;
    memObj[currWord] = [...memArr];
    memArr = [];
  };

  return false;
};

let word = "bccdbacdbdacddabbaaaadababadad";
let wordDict = [
  "cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb",
  "dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd",
  "ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba",
  "cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc",
  "babb"
];

console.log(wordBreak(word, wordDict));