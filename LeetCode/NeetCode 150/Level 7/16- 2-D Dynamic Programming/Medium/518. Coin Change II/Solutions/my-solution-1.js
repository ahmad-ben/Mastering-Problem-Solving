var change = function(amount, coins) {
  if(amount === 0) return 1;

  const memArr = Array.from(
    {length: coins.length}, e => Array(amount).fill(0)
  );

  for(let rowIdx = 0; rowIdx < coins.length; ++rowIdx){
    const currCoinVal = coins[rowIdx];
    let prevRowVal, prevColVal;

    for(let colIdx = 0; colIdx < amount; ++colIdx){
      if(rowIdx === 0) prevRowVal = 0;
      else prevRowVal = memArr[rowIdx - 1][colIdx];

      if(colIdx + 1 === currCoinVal) prevColVal = 1;
      else if(colIdx - currCoinVal < 0) prevColVal = 0;
      else prevColVal = memArr[rowIdx][colIdx - currCoinVal];

      memArr[rowIdx][colIdx] = prevRowVal + prevColVal;
    };
  };

  return memArr[memArr.length - 1][memArr[0].length - 1];
};