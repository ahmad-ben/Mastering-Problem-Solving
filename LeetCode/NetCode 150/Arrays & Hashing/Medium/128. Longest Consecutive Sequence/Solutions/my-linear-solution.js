var longestConsecutive = function(numArr) {
  if(numArr.length <= 1) return numArr.length;

  let obj = {};
  let longestArrLength = 1;

  for(num of numArr) obj[num] = 1;

  for(num in obj){
    if(obj[num] === undefined) continue;

    let currentVal = 1, prevCur = 1;
    num = Number(num);

    while(obj[num + currentVal] !== undefined) {
      prevCur = currentVal;
      currentVal += obj[num + currentVal];
      obj[num + prevCur] = undefined;
    };

    obj[num] = currentVal;
    if(currentVal > longestArrLength) longestArrLength = currentVal;
  };

  return longestArrLength;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));