// If you buy you can: Sell OR CoolDown.
// If you Sell you should: CoolDown.

var maxProfit = function(prices) {
  let maxProfit = 0;

  const currDayAct = (dayIdx, canIBuy, canISell, currProfit) => {
    maxProfit = Math.max(maxProfit, currProfit); 
    if(dayIdx === prices.length) return;

    const todayPrice = prices[dayIdx];

    if(!canIBuy && !canISell) 
      currDayAct(dayIdx + 1, true, false, currProfit);
    else if(canIBuy){
      // Buying:
      currDayAct(dayIdx + 1, false, true, currProfit - todayPrice);
      // CoolDown:
      currDayAct(dayIdx + 1, true, false, currProfit);
    } else{
      // Selling:
      currDayAct(dayIdx + 1, false, false, currProfit + todayPrice);
      // CoolDown:
      currDayAct(dayIdx + 1, false, true, currProfit);
    };

  };

  currDayAct(0, true, false, 0);
  return maxProfit;
};