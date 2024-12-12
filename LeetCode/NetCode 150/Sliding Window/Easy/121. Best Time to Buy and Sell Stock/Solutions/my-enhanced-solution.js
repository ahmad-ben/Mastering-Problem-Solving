// Without any help 😁

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let minBuyPriceVal = prices[0], maxBenefitVal = 0, dif = 0;

  for(i = 1; i < prices.length; i++){
    dif = prices[i] - minBuyPriceVal;
    if(dif > maxBenefitVal) maxBenefitVal = dif;
    else if(dif < 0) minBuyPriceVal = prices[i];
  }

  return maxBenefitVal;
};