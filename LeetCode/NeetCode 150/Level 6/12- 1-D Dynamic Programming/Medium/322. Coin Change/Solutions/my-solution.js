var coinChange = function(coins, amount) {
  const memArr = [];

  const makeUpAmount = (currLeftAmount) => {
    if(currLeftAmount === 0) return 0;

    if(currLeftAmount < 0) return Infinity;

    if(memArr[currLeftAmount]) return memArr[currLeftAmount];

    let fewestCoinsNum = Infinity;
    for(let coin of coins){
      const coinsNum = makeUpAmount(currLeftAmount - coin);
      fewestCoinsNum = Math.min(fewestCoinsNum, coinsNum);
    };

    return memArr[currLeftAmount] = fewestCoinsNum + 1;
  };

  const fewestCoinsNum = makeUpAmount(amount);

  return fewestCoinsNum === Infinity ? -1 : fewestCoinsNum;
};