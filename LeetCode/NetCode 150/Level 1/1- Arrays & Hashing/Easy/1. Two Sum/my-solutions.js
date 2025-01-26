/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

const twoSumFirstVersion = (arr, target) => {
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined) obj[arr[i]] = i;
    else if(arr[i] * 2 === target) return [obj[arr[i]], i]; 
  };

  for(key in obj) if(obj[target - key]) return [obj[key], obj[target - key]];
};

// Node need to wait until finish the array iteration.
const twoSumSecondVersion = (arr, target) => {
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    if(obj[target - arr[i]] !== undefined) return [i ,obj[target - arr[i]]];

    if(obj[arr[i]] === undefined) obj[arr[i]] = i;
    else if(arr[i] * 2 === target) return [obj[arr[i]], i]; 
  };
};

const twoSumThirdVersion = (arr, target) => {
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    if(obj[target - arr[i]] !== undefined) return [i ,obj[target - arr[i]]];
    obj[arr[i]] = i; 
  };
};

console.log(twoSumThirdVersion([5, 3, 4, 1, 6], 5));    //[2, 3]
console.log(twoSumThirdVersion([4, 2, 7, 9, 8, 4], 8)); //[0, 5]
console.log(twoSumThirdVersion([3, 8, 4, 3, 7], 6));    //[0, 5]