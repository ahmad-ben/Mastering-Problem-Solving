const eraseOverlapIntervals = (intervals) => {
  // Sort intervals by start time.
  intervals.sort((a, b) => a[0] - b[0]);
  // Initialize result and previous end time.
  let res = 0, prevEnd = intervals[0][1];

  // Iterate over intervals strting from the second interval.
  for (let i = 1; i < intervals.length; i++) {
    // Get start and end time of the current interval.
    const start = intervals[i][0], end = intervals[i][1];

    // If the current interval does not overlap with the previous interval:
    // update the previous end time to the end time of the current interval.
    if (start >= prevEnd) prevEnd = end;
    // Otherwise, the current interval overlaps with the previous interval:
    // increment the result and update the previous end time. 
    // to the minimum of the end time of the current interval and the previous end time.
    else res++, prevEnd = Math.min(end, prevEnd);
  };

  return res;
};