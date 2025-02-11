const ifTwoWordsNeighbors = (word1, word2) => {
  let diffNum = 0;

  for(let charIdx = 0; charIdx < word1.length; ++charIdx){
      const word1CurrChar = word1[charIdx], word2CurrChar = word2[charIdx];
      if(word1CurrChar !== word2CurrChar) ++diffNum;
      if(diffNum === 2) return false;
  };

  return true;
};

var ladderLength = function(beginWord, endWord, wordList) {
  const wordNeighborsMap = new Map();

  wordList.push(beginWord);

  for(let word of wordList) wordNeighborsMap.set(word, []);

  for(let wordIdx = 0; wordIdx < wordList.length; ++wordIdx){
      const mainWord = wordList[wordIdx];
      for(let checkedWIdx = wordIdx + 1; checkedWIdx < wordList.length; ++checkedWIdx){
          const checkedW = wordList[checkedWIdx];
          if(ifTwoWordsNeighbors(mainWord,checkedW)){
              wordNeighborsMap.get(mainWord).push(checkedW);
              wordNeighborsMap.get(checkedW).push(mainWord);
          }
      };
  };

  let stepsNum = 0, minStepsNum = Infinity, visitedWords = new Set();

  const checkPath = (word) => {
      if(visitedWords.has(word)) return;

      if(minStepsNum <= stepsNum) return;

      if(word === endWord) 
          return minStepsNum = Math.min(minStepsNum, stepsNum + 1);

      visitedWords.add(word), ++stepsNum;

      for(let pathWord of wordNeighborsMap.get(word)) checkPath(pathWord);

      visitedWords.delete(word), --stepsNum;
  }

  checkPath(beginWord);

  return minStepsNum === Infinity ? 0 : minStepsNum;
};