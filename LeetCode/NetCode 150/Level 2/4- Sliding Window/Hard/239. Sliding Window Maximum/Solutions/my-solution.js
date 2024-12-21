/**
 * @param {number[]} numArr
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = (numArr, k) => {
  let storeArr = [], resultArr = [];

  for(rightEdge = 0; rightEdge < numArr.length; rightEdge++){
    numWithIdx = {num: numArr[rightEdge], idx: rightEdge};

    // Remove the already stored items those smaller than the new one.
    while(storeArr[storeArr.length - 1]?.num <= numWithIdx.num) storeArr.pop();

    storeArr.push(numWithIdx);

    // Remove the biggest numbers those don't exist in our window.
    while(storeArr[0].idx < rightEdge - k + 1) storeArr.shift();

    if(rightEdge >= k - 1) resultArr.push(storeArr[0]);
  };

  resultArr = resultArr.map(item => item.num);

  return resultArr;
};