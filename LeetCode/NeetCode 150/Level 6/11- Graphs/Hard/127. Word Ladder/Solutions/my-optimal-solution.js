/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const generatePattern = (w, i) => `${w.substring(0,i)}*${w.substring(i+1)}`;

const generateWordsPatternsMap = (wordList) => {
  const patternWordsMap = {};

  for(let word of wordList){ 
    for(charIdx = 0; charIdx < wordsLength; ++charIdx){ 
      const currPattern = generatePattern(word,charIdx);

      if(!patternWordsMap[currPattern]) patternWordsMap[currPattern] = [];

      patternWordsMap[currPattern].push(word);
    }
  }

  return patternWordsMap;
}

var ladderLength = function(beginWord, endWord, wordList) {
  if(!wordList.includes(endWord)) return 0; 

  wordList.push(beginWord), wordsLength = beginWord.length;

  const patternWordsMap = generateWordsPatternsMap(wordList);
  const visitedWords = new Set(), nextWordsQueue = new Queue();
  let wordsNum = 1;

  visitedWords.add(beginWord), nextWordsQueue.enqueue(beginWord);

  while(!nextWordsQueue.isEmpty()){
    let queueSize = nextWordsQueue.size();

    while(queueSize--){
      const currWord = nextWordsQueue.dequeue();

      if(currWord === endWord) return wordsNum;

      for(charIdx = 0; charIdx < wordsLength; ++charIdx){
        const currPattern = generatePattern(currWord,charIdx);
            
        const currPatternWords = patternWordsMap[currPattern];

        for(let word of currPatternWords){
          if(visitedWords.has(word)) continue;
          visitedWords.add(word), nextWordsQueue.enqueue(word);
        }
      }

    };

    ++wordsNum;
  }

  return 0;
};