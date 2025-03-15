/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const prefix = []; suffix = [];
  let incrementRate = prevVal = 0;

  for(let boxIdx = 0; boxIdx < boxes.length; ++boxIdx){
    prefix[boxIdx] =  incrementRate + prevVal;
    if(boxes[boxIdx] === "1") ++incrementRate;
    prevVal = prefix[boxIdx];
  };

  incrementRate = prevVal = 0;
  for(let boxIdx = boxes.length - 1; boxIdx >= 0; --boxIdx){
    suffix[boxIdx] =  incrementRate + prevVal;
    if(boxes[boxIdx] === "1") ++incrementRate;
    prevVal = suffix[boxIdx];
  };

  for(let boxIdx = 0; boxIdx < boxes.length; ++boxIdx)
    prefix[boxIdx] += suffix[boxIdx];

  return prefix;
};