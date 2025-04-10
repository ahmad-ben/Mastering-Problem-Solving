var maxCoins = function(numArr) {
  const cacheObj = {};

  const maximumCoinsFromArr = (remainingBal) => {
    if(remainingBal.length === 1) return remainingBal[0];
    if(cacheObj[remainingBal.join()]) return cacheObj[remainingBal.join()];

    let currMax = 0;

    for(let balIdx = 0; balIdx < remainingBal.length; ++balIdx){
      const currBalVal = remainingBal[balIdx];
      const prevBal = remainingBal[balIdx - 1] ?? 1;
      const nextBal = remainingBal[balIdx + 1] ?? 1;

      const burstBalVal = prevBal * currBalVal * nextBal;

      let newArr = [...remainingBal];
      newArr.splice(balIdx, 1);

      currMax = Math.max(currMax, burstBalVal + maximumCoinsFromArr(newArr));
    }

    return cacheObj[remainingBal.join()] = currMax;
  };

  return maximumCoinsFromArr(numArr);
};