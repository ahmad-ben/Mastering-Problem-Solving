var change = function(amount, coins) {
  const memArr = Array.from({length: 2}, e => Array(amount + 1).fill(0));
  memArr[1][0] = 1;

  for(let coinVal of coins){
    for(let colI = 1; colI <= amount; ++colI){
      if(coinVal > colI) memArr[1][colI] = memArr[0][colI];
      else memArr[1][colI] = memArr[0][colI] + memArr[1][colI - coinVal];
    };

    memArr[0] = [...memArr[1]];
  }

  return memArr[1][amount];
};