/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((int1, int2) => int1[0] - int2[0]);

  const memArr = new Array(intervals.length).fill(1);

  for(let intIdx = intervals.length - 1; intIdx > -1; --intIdx){
      const currIntEnd = intervals[intIdx][1];

      for(let nextInt = intIdx + 1; nextInt < intervals.length; ++nextInt){
          const nextIntStart = intervals[nextInt][0];

          if(currIntEnd > nextIntStart) continue;

          memArr[intIdx] = Math.max(memArr[intIdx], memArr[nextInt] + 1);
      }
  }

  const max = Math.max(...memArr);

  return intervals.length - max;
};