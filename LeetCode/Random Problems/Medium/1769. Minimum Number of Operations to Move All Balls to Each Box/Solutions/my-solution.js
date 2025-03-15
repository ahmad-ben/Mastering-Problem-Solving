var minOperations = function(boxes) {
  const output = [];

  for(let boxIdx = 0; boxIdx < boxes.length; ++boxIdx){
    currBoxVal = 0;

    for(let boxCalIdx = 0; boxCalIdx < boxes.length; ++boxCalIdx){
      if(boxes[boxCalIdx] === "0") continue;
      currBoxVal += Math.abs(boxIdx - boxCalIdx);
    }

    output[boxIdx] = currBoxVal;
  };

  return output;
};