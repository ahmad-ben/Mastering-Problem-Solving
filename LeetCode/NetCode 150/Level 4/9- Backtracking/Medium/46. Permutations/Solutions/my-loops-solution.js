/**
 * @param {number[]} numArr
 * @return {number[][]}
 */

var permute = function(numArr) {
  let outputArr = [[]], newOutputArr = [];

  for(num of numArr){ 
      newOutputArr = [];

      for(j = 0; j < outputArr.length; ++j) 

          for(z = 0; z <= outputArr[j].length; ++z){ 
              const newArr = [...outputArr[j]];
              newArr.splice(z, 0, num);
              newOutputArr.push(newArr);
          }

      outputArr = newOutputArr;
  }

  return outputArr;
};