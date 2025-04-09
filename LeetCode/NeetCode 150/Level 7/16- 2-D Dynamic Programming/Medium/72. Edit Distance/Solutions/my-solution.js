var minDistance = function(word1, word2) {
  const memObj = {};

  const checkCurrChar = (w1CIdx, w2CIdx) => {
    if(w1CIdx === -1) return w2CIdx + 1;
    if(w2CIdx === -1) return w1CIdx + 1;

    if(!memObj[w1CIdx]) memObj[w1CIdx] = {}; 
    if(memObj[w1CIdx][w2CIdx] !== undefined) return memObj[w1CIdx][w2CIdx]; 

    if(word1[w1CIdx] === word2[w2CIdx]) 
      return memObj[w1CIdx][w2CIdx] = checkCurrChar(w1CIdx - 1, w2CIdx - 1);

    return memObj[w1CIdx][w2CIdx] = (
      Math.min(
        checkCurrChar(w1CIdx - 1, w2CIdx),
        checkCurrChar(w1CIdx, w2CIdx - 1),
        checkCurrChar(w1CIdx - 1, w2CIdx - 1)
      ) + 1
    );
  };

  return checkCurrChar(word1.length - 1, word2.length - 1);
};