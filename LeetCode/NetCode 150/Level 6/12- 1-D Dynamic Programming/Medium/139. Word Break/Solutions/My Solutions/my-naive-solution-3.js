var wordBreak = function(s, wordDict) {
  let memObj = {}, memArr = [], strCharCount = {};

  const newWordDict = [];

  for(let strChar of s)
      strCharCount[strChar] = (strCharCount[strChar] | 0) + 1;

  for(let word of wordDict)
      if(s.includes(word)) newWordDict.push(word);

  wordDict = newWordDict;

  checkCurrStr = (currStr, currStrCount, addedWord) => {
      console.log(currStr, currStrCount, addedWord, strCharCount)
      if(currStr.length > s.length) return false;

      if(currStr.length === s.length){
          if(currStr === s) return true; 
          return false;
      }

      const newStrCount = {...currStrCount};

      for(let charStr of addedWord){
          newStrCount[charStr] = (newStrCount[charStr] | 0) + 1;
          if(
              !strCharCount[charStr] ||
              newStrCount[charStr] > strCharCount[charStr]
          ) return false;
      }

      memArr.push(currStr); 

      for(let currWord of wordDict){
          if(memObj[currWord]){
              for(let combination of memObj[currWord]){
                  if(
                      checkCurrStr(
                          `${currStr}${combination}`,
                          newStrCount,
                          combination
                      )
                  ) return true;
              }
          }else{
              if(
                  checkCurrStr(
                      `${currStr}${currWord}`,
                      newStrCount,
                      currWord
                  ) 
              ) return true;
          }
      }

      return false;
  };

  for(let currWord of wordDict){
      if(checkCurrStr(currWord, {}, currWord)) return true;

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