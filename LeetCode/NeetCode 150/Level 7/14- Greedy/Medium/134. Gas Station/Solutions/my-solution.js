var canCompleteCircuit = function(gas, cost) {
  // Store the total result and the current result and the valid start index.
  // The total result is the sum of all the gas minus the cost.
  // The current result is the sum of the gas minus the cost from the current station.
  // The valid start index is the index of the station that can be the start station.
  let totalResult = currResult = 0, properStartIdx;

  for(let currGasSIdx = 0; currGasSIdx < gas.length; ++currGasSIdx){
    // Calculate the current station result, it's the gas minus the cost from the current station.
    currStationRes = gas[currGasSIdx] - cost[currGasSIdx];

    // Add the current station result to the total result and the current result.
    totalResult += currStationRes, currResult += currStationRes;

    // If the current result is less than 0, reset the current result and the valid start index.
    // Since the current result is less than 0, we can't start from the previous station.
    if(currResult < 0) properStartIdx = undefined, currResult = 0;
    // If the valid start index is not defined and the current result is greater than or equal to 0.
    // Set the valid start index to the current station index.
    else properStartIdx =  properStartIdx ?? currGasSIdx; 
  };

  // If the total result is less than 0, return -1, else return the valid start index.
  // If the total result is less than 0 that means the total gas is less than the total cost.
  // So we can't complete the circuit.
  return totalResult < 0 ? -1 : properStartIdx;
};