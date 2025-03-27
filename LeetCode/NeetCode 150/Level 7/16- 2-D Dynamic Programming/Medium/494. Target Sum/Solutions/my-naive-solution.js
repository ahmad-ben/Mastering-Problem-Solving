/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(numArr, target) {
  let expressionsArr = [0], expressionsNum = 0;;

  for(const num of numArr){
    let newArr = [];

    for(const currExpression of expressionsArr){
      newArr.push(currExpression - num);
      newArr.push(currExpression + num);
    };

    expressionsArr = newArr, newArr = [];
  };

  expressionsArr.forEach(expVal => expVal === target && ++expressionsNum);

  return expressionsNum;
};