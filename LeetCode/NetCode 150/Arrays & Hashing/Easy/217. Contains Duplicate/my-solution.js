/**
 * @param {number[]} numbersArray
 * @return {boolean}
 */

const containsDuplicate = numbersArray => {
  let objOfNumbersArray = {};
  for(num of numbersArray) {
    if(objOfNumbersArray[num]) return true; 
    objOfNumbersArray[num] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 5, 4, 3, 1, 7]));