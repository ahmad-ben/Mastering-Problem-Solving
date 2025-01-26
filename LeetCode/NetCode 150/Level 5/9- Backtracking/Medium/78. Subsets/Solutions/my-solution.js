/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const itemsSubSets = {}; // Time: O(1)  ||  Space: O(1) 

  for(num of nums) { // Time: O(n)  ||  Space: O(1) 
      itemsSubSets[num] = [[num]]; // Time: O(1)  ||  Space: O(n) 

      for(itemSubSet in itemsSubSets){ // Time: O(n)  ||  Space: O(1) 
          if(itemSubSet === num.toString()) continue; // Time: O(1)  ||  Space: O(1) 

          itemsSubSets[itemSubSet].forEach(subSetArr =>  // Time: O(2ⁿ)  ||  Space: O(2ⁿ) 
              itemsSubSets[num].push([...subSetArr, num]))
      }
  }

  let outArr = [[]]; // Time: O(1)  ||  Space: O(1) 

  for(itemSubSet in itemsSubSets) // Time: O(n)  ||  Space: O(2ⁿ) 
      itemsSubSets[itemSubSet].forEach(subSetArr => outArr.push(subSetArr));

  return outArr;
};