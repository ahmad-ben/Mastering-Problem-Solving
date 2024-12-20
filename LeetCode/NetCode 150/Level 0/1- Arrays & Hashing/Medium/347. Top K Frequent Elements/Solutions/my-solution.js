/**
 * @param {number[]} numArr
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (numArr, k) => {
  let mostFreNum = [];
  let numbersFre = {};
  let numbersFreArr = Array.from({ length: numArr.length }).map((v, i)=> []);

  for(num of numArr){
    if(numbersFre[num]) ++numbersFre[num];
    else numbersFre[num] = 1;
  };

  for(integerValue in numbersFre){
    const integerFre = numbersFre[integerValue];
    numbersFreArr[integerFre].push(integerValue);
  }

  for(i = numbersFreArr.length - 1; i > 0; i--){
    let currentBucket = numbersFreArr[i];
    for (let j = 0; j < currentBucket.length; j++) {
      let currentNumber = currentBucket[j];
      mostFreNum.push(Number(currentNumber));
      if(mostFreNum.length === k) return mostFreNum;
    }
  };
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));