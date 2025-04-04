var numIdenticalPairs = function(numArr) {
  let goodPairsNum = 0;

  for(let i = 0; i < numArr.length; ++i)
    for(let j = i + 1; j < numArr.length; ++j)
      if(numArr[i] === numArr[j]) ++goodPairsNum;

  return goodPairsNum;
};