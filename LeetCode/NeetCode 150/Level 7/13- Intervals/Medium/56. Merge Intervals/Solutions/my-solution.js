var merge = function(intervals) {
  intervals.sort((int1, int2) => int1[0] - int2[0]);

  const outputArr = [];

  for(let intIdx = 0; intIdx < intervals.length; ++intIdx){
    const [start, end] = intervals[intIdx], nextInt = intervals[intIdx + 1];

    if(nextInt && end >= nextInt[0]) 
      intervals[intIdx + 1] = [start, Math.max(end, nextInt[1])]
    else outputArr.push([start, end])
  }

  return outputArr;
};