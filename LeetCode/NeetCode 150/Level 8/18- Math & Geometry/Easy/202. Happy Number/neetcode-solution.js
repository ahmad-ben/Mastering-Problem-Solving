const sumOfSquares = (n) => {
  let output = 0;

  while (n > 0) {
    let digit = n % 10;
    digit = digit * digit;
    output += digit;
    n = Math.floor(n / 10);
  };

  return output;
}

const isHappy = (n) => {
  const visit = new Set();

  while (!visit.has(n)) {
    visit.add(n);

    n = sumOfSquares(n);

    if (n === 1) return true;
  }
  return false;
};