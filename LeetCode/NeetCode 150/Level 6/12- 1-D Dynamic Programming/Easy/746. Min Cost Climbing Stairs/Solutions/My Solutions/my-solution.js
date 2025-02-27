var minCostClimbingStairs = function(cost) {
  const idxMinCostMemArr = [];

  const climb = stepIdx => {
    if(idxMinCostMemArr[stepIdx] !== undefined) 
      return idxMinCostMemArr[stepIdx];

    if(stepIdx >= cost.length) return 0;

    let min = Math.min(climb(stepIdx + 1), climb(stepIdx + 2));

    return idxMinCostMemArr[stepIdx] = min + cost[stepIdx];
  };

  climb(0, 0);

  return Math.min(idxMinCostMemArr[0], idxMinCostMemArr[1]);
};