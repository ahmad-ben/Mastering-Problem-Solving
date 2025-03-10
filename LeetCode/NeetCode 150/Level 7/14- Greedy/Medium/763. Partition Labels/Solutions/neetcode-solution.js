const partitionLabels = (S) => {
  let lastIndex = {};
  for (let i = 0; i < S.length; i++) lastIndex[S[i]] = i;

  let res = [], size = 0, end = 0;

  for (let i = 0; i < S.length; i++) {
    size++;
    end = Math.max(end, lastIndex[S[i]]);

    if (i === end) res.push(size), size = 0;
  };

  return res;
};