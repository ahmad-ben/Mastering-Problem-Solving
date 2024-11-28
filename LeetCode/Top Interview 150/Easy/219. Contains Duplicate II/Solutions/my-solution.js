/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

const containsNearbyDuplicate = (arr, k) => {
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined) obj[arr[i]] = i;
    else{
      if(i - obj[arr[i]] <= k) return true;
      obj[arr[i]] = i;
    }
  };

  return false;
};

// The distance between an equaled pair is K or less. 
console.log(containsNearbyDuplicate([1, 2, 3, 2, 1], 4));
console.log(containsNearbyDuplicate([1, 2, 3, 9, 1], 3));