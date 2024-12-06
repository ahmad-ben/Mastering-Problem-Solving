/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const temArrLength = temperatures.length;

  let daysToWarmerTem = Array(temArrLength).fill(0);
  console.log(daysToWarmerTem);

  for(i = temArrLength - 2; i >= 0; i--){
    let j = i + 1;

    while(j < temArrLength){
      if(temperatures[i] > temperatures[j]) j++;
      else if(temperatures[i] < temperatures[j]){
        daysToWarmerTem[i] = j - i;
        break; 
      }else{
        daysToWarmerTem[i] = daysToWarmerTem[j] ? daysToWarmerTem[j] + j - i: 0;
        break; 
      }
    }
  };

  return daysToWarmerTem;
};