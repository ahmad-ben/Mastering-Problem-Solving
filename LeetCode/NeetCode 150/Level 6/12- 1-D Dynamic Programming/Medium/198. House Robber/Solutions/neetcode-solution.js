const rob = nums => {
  let rob1 = rob2 = 0;

  for (const n of nums) [rob1, rob2] = [rob2, Math.max(rob1 + n, rob2)];

  return rob2;
};