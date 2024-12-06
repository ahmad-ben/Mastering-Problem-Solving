/*
  This solution used the collected data very well:
    Merging between the collected data and the problem logic to get the optimal solution.
  Using DP.
*/


const dailyTemperatures = temperatures => {
  const tempArrLength = temperatures.length;
  const res = Array(tempArrLength).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    let j = i + 1;

    while (temperatures[i] >= temperatures[j]) {
      // There is no item in the array bigger that the current item.
      if (res[j] === 0) {
        j = i;
        break;
      };

      // Jamb to a bigger item to apply the comparison again.
      j += res[j];
    };

    res[i] = j - i
  };

  return res
};