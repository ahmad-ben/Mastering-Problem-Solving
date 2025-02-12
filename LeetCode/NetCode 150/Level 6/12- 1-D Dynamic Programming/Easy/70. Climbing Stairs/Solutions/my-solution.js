var climbStairs = function(n) {
  // Memoization array.
  let memArr = [0, 1, 2];

  const climb = (num) => {
    // Base case, if the number is already calculated, return it.
    if(memArr[num]) return memArr[num];

    // Recursive case, calculate the number and store it in the memoization array.
    return memArr[num] = climb(num - 1) + climb(num - 2);
  };

  // Call the recursive function.
  climb(n);

  // Return the result.
  return memArr[n];
};