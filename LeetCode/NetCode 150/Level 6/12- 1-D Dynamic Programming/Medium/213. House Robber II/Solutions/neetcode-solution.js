const rob = (nArr) => 
  Math.max(nArr[0],helper(nArr.slice(1)),helper(nArr.slice(0, -1)));

const helper = (nArr) => {
  let rob1 = rob2 = 0;
  for (const num of nArr) [rob1, rob2] = [rob2, Math.max(rob1 + num, rob2)];
  return rob2;
};