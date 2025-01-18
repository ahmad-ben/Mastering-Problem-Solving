/* 
  The hole idea is about storing the base case first and then:
    Keep any subset you have and also use it to create the new ones.
  [[]]
  We have 1:
    [[], [1]]
  We have 2:
    [[], [1], [2], [1,2]]
*/

const subsets = (numArr) => {
  let res = [[]];

  for (let num of numArr) {
    let size = res.length;

    for (let i = 0; i < size; i++) {
      // We can use the [...res[i]].
      // We need a shallow copy to avoid changing the already exist subsets value.
      let subset = res[i].slice(); 
      subset.push(num);
      res.push(subset);
    }

  }

  return res;
};



/*


I will pass to you the three solutions I have.
I want you to deeply analyze the time/space complexity of each solution.
Explain its approach that it took.
Explain any data structure or algorithm or pattern it followed.

==========================================================================
Solution Number 1:
var subsets = function(nums) {
  const itemsSubSets = {};

  for(num of nums) {
      itemsSubSets[num] = [[num]];

      for(itemSubSet in itemsSubSets){
          if(itemSubSet === num.toString()) continue;

          itemsSubSets[itemSubSet].forEach(subSetArr =>
              itemsSubSets[num].push([...subSetArr, num]))
      }
  }

  let outArr = [[]];

  for(itemSubSet in itemsSubSets)
      itemsSubSets[itemSubSet].forEach(subSetArr => outArr.push(subSetArr));

  return outArr;
};

==========================================================================
Solution Number 2:
const subsets = (numArr) => { 
  const res = [], subset = [];

  this.dfs(numArr, 0, subset, res);

  return res;
}

dfs = (numArr, i, subset, res) => {
  if (i >= numArr.length) return res.push([...subset]);

  subset.push(numArr[i]);
  this.dfs(numArr, i + 1, subset, res);

  subset.pop();
  this.dfs(numArr, i + 1, subset, res);
}

==========================================================================
Solution Number 3:
const subsets = (numArr) => {
  let res = [[]];

  for (let num of numArr) {
    let size = res.length;

    for (let i = 0; i < size; i++) {
      let subset = res[i].slice(); 
      subset.push(num);
      res.push(subset);
    }

  }

  return res;
};

*/