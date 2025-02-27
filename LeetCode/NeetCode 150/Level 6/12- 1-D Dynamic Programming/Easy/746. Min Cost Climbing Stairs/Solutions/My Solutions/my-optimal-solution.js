var minCostClimbingStairs = function(cost) {
  // Iterate backwards from the third-to-last element down to the first.
  // We start at cost.length - 3 because the last two steps don't need updating.
  for (let idx = cost.length - 3; idx >= 0; --idx)
      // Update the cost at index idx to be:
      // current cost + min(cost of next step, cost of the step after that)
      cost[idx] += Math.min(cost[idx + 1], cost[idx + 2]);

  // The answer is the minimum cost between starting at step 0 or step 1.
  return Math.min(cost[0], cost[1]);
};

/*
  Visualization with the Input: [1,100,1,1,1,100,1,1,100,1]
  Let's label the indices as follows:

  Index:   0   1    2   3   4   5   6  7   8   9
  Cost:   [1, 100,  1,  1,  1, 100, 1, 1, 100, 1]

  Why we start from the last third position:
    We know that for the last two steps, the cost to "finish" (i.e. reach the top) is already given. 
      Because we are in the top already. 
    But for any step starting from the last third:
      The minimum cost to reach the top is its own cost plus the minimum of the two coming costs idx + 1 and idx + 2.

Step 1: Start from idx = 7
  Index 7:
  New cost[7] = cost[7] + min(cost[8], cost[9])
              = 1 + min(100, 1)
              = 1 + 1 = 2
  Updated cost array:
    [1, 100, 1, 1, 1, 100, 1, 2, 100, 1]


  Step 2: idx = 6
  Index 6:
  New cost[6] = cost[6] + min(cost[7], cost[8])
              = 1 + min(2, 100)
              = 1 + 2 = 3
  Updated cost array:
    [1, 100, 1, 1, 1, 100, 3, 2, 100, 1]


  Step 3: idx = 5
  Index 5:
  New cost[5] = cost[5] + min(cost[6], cost[7])
              = 100 + min(3, 2)
              = 100 + 2 = 102
  Updated cost array:
    [1, 100, 1, 1, 1, 102, 3, 2, 100, 1]
  

  Step 4: idx = 4
  Index 4:
  New cost[4] = cost[4] + min(cost[5], cost[6])
              = 1 + min(102, 3)
              = 1 + 3 = 4
  Updated cost array:
    [1, 100, 1, 1, 4, 102, 3, 2, 100, 1]
  

  Step 5: idx = 3
  Index 3:
  New cost[3] = cost[3] + min(cost[4], cost[5])
              = 1 + min(4, 102)
              = 1 + 4 = 5
  Updated cost array:
    [1, 100, 1, 5, 4, 102, 3, 2, 100, 1]


  Step 6: idx = 2
  Index 2:
  New cost[2] = cost[2] + min(cost[3], cost[4])
              = 1 + min(5, 4)
              = 1 + 4 = 5
  Updated cost array:
    [1, 100, 5, 5, 4, 102, 3, 2, 100, 1]


  Step 7: idx = 1
  Index 1:
  New cost[1] = cost[1] + min(cost[2], cost[3])
              = 100 + min(5, 5)
              = 100 + 5 = 105
  Updated cost array:
    [1, 105, 5, 5, 4, 102, 3, 2, 100, 1]
  

  Step 8: idx = 0
  Index 0:
  New cost[0] = cost[0] + min(cost[1], cost[2])
              = 1 + min(105, 5)
              = 1 + 5 = 6


  Final cost array:
    [6, 105, 5, 5, 4, 102, 3, 2, 100, 1]

  Final Step:
  Return min(cost[0], cost[1]) = min(6, 105) = 6
*/