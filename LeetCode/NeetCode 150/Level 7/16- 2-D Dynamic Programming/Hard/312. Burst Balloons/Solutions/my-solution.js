var maxCoins = function(numArr) {
  numArr.push(1), numArr.unshift(1);

  let cacheObj = {}, leftEdge = 1, rightEdge = numArr.length - 2, max = 0;

  const check = (leftEdge, rightEdge) => {
    if(leftEdge === numArr.length - 1 || rightEdge === 0) return 0;

    if(leftEdge === rightEdge) 
      return numArr[leftEdge - 1] * numArr[leftEdge] * numArr[leftEdge + 1];

    if(cacheObj[leftEdge] === undefined) 
      cacheObj[leftEdge] = {};
    else if(cacheObj[leftEdge][rightEdge] !== undefined) 
      return cacheObj[leftEdge][rightEdge];

    let currMax = 0;

    for(let newNumIdx = leftEdge; newNumIdx <= rightEdge; newNumIdx++)
      currMax = Math.max(
        currMax,
        numArr[newNumIdx] * numArr[leftEdge - 1] * numArr[rightEdge + 1] + 
        check(leftEdge, newNumIdx - 1) + 
        check(newNumIdx + 1, rightEdge)
      );

    return cacheObj[leftEdge][rightEdge] = currMax;
  }

  for(let numIdx = leftEdge; numIdx <= rightEdge; numIdx++)
    max = Math.max(
      max,
      numArr[numIdx] * numArr[leftEdge - 1] * numArr[rightEdge + 1] +
      check(leftEdge, numIdx - 1) + 
      check(numIdx + 1, rightEdge)
    );

  return max;
};