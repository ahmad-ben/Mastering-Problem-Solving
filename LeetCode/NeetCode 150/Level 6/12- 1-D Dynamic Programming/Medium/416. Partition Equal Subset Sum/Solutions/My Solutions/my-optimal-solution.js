var canPartition = function(nums) {
  const arrTotalSum = nums.reduce((partialSum, a) => partialSum + a, 0);
  if(arrTotalSum % 2 !== 0) return false;

  let subsetWantedSum = arrTotalSum / 2;

  const subsetSums = new Set();

  for(let numIdx = nums.length - 1; numIdx >= 0; --numIdx){
    const currVal = nums[numIdx], valCombinationArr = [currVal];

    for (const subsetSum of subsetSums) 
      valCombinationArr.push(subsetSum + currVal);

    valCombinationArr.forEach(item => subsetSums.add(item))

    if(subsetSums.has(subsetWantedSum)) return true;
  }

  return false;
};