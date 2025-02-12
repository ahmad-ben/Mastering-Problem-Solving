const climbStairs = (n) => {
  let one = two = 1;
  for (let i = 0; i < n - 1; i++) [one, two] = [one + two, one];
  return one;
};