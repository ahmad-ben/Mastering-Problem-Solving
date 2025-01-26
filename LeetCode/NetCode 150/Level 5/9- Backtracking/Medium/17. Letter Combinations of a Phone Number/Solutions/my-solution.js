const numLetterMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const getDigitsLetters = (digits) => {
  const digitsLettersArr = [];
  for(let digit of digits) digitsLettersArr.push(numLetterMap[digit]);
  return digitsLettersArr;
}

/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function(digits) {
  if(!digits) return [];

  const digitsLetters = getDigitsLetters(digits), combinationsArr = [];

  const generateCombinations = (digitLettersIdx, letterIdx, comStr) => {
      const currDigitArr = digitsLetters[digitLettersIdx];

      if(
          digitLettersIdx === digitsLetters.length ||
          letterIdx === currDigitArr.length
      ) return combinationsArr.push(comStr)

      generateCombinations(digitLettersIdx + 1, letterIdx, comStr + currDigitArr[letterIdx]);
      
      ++letterIdx;
      while(letterIdx < currDigitArr.length){
          generateCombinations(digitLettersIdx + 1, 0, comStr + currDigitArr[letterIdx]); 
          ++letterIdx;
      }
  }
  
  generateCombinations(0, 0, "");
  return combinationsArr;
};