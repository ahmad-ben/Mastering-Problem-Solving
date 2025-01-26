/*
  For each item we have basically two choices:
    Include it in our subset array.
    Don't include it.

  See:
    In => Include, Ex => Exclude.
      Start with an empty subset:

  Start with an empty subset:

                      []
        In 1 /                  \ Ex 1
          [1]                   []
 In 2 /        \ Ex 2  In 2 /        \ Ex 2
   [1,2]       [1]        [2]        []

  Final subsets: [[], [2], [1], [1,2]]
*/

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