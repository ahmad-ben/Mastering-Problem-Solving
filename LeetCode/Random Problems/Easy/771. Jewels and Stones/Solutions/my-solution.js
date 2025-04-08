var numJewelsInStones = function(jewels, stones) {
  const jewelsObj = {}; let jewelsStones = 0;

  for(let jewel of jewels) jewelsObj[jewel] = true;

  for(let stone of stones) if(jewelsObj[stone]) ++jewelsStones;

  return jewelsStones;
};