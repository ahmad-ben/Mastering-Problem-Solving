const eraseOverlapIntervals = function(intervals) {
  intervals.sort((int1, int2) => int1[0] - int2[0]);

  const nonOverlappInt = [intervals[0]];

  for(let intIdx = 1; intIdx < intervals.length; ++intIdx){
    const lastIntIdx = nonOverlappInt.length - 1;
    const currInt = intervals[intIdx];

    if(nonOverlappInt[lastIntIdx][1] > currInt[0]){
      if(nonOverlappInt[lastIntIdx][1] > currInt[1]) 
        nonOverlappInt[lastIntIdx] = currInt;
    }else nonOverlappInt.push(currInt)
  };

  return intervals.length - nonOverlappInt.length;
};