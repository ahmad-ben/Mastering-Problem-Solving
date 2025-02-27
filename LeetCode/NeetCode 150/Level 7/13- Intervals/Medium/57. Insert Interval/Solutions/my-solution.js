var insert = function(intervals, newInterval) {
  const newintervalsArr = [];
  let newIntAdded = false;

  for(let [intStart, intEnd] of intervals){
    if(intEnd < newInterval[0]) newintervalsArr.push([intStart, intEnd]);
    else if(intStart <= newInterval[1]){
      newInterval[0] = Math.min(newInterval[0], intStart);
      newInterval[1] = Math.max(newInterval[1], intEnd);
    }else{
      if(!newIntAdded){
        newintervalsArr.push(newInterval);
        newIntAdded = true; 
      }
      newintervalsArr.push([intStart, intEnd]);
    }
  }

  if(!newIntAdded) newintervalsArr.push(newInterval);

  return newintervalsArr;
};