/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let maxSellPrice = 0, maxBenefitVal = 0;

  for(i = 0; i < prices.length - 1; i++){
    const buyPrice = prices[i];

    for(j = i + 1; j < prices.length; j++) 
      maxSellPrice = Math.max(maxSellPrice, prices[j]);

    maxBenefitVal = Math.max(maxBenefitVal, maxSellPrice - buyPrice);
    maxSellPrice = 0;
  };

  return maxBenefitVal;
};