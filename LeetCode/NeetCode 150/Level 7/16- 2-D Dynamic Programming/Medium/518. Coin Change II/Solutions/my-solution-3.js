var change = function(amount, coins) {
  const memArr = Array(amount + 1).fill(0);
  memArr[0] = 1;

  for(let coinVal of coins)
    for(let colI = 1; colI <= amount; ++colI)
      if(coinVal <= colI) memArr[colI] += memArr[colI - coinVal];

  return memArr[amount];
};