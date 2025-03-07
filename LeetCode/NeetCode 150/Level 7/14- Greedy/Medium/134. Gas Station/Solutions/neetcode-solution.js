const canCompleteCircuit = (gas, cost) => {
  if (
    gas.reduce((acc, v) => acc + v, 0) < cost.reduce((acc, v) => acc + v, 0)
  ) return -1

  let total = 0, res = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) total = 0, res = i + 1;
  }

  return res;
};