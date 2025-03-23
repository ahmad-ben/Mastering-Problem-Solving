const findCheapestPrice = (n, flights, src, dst, k) => {
  let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
    const tmpPrices = [...prices];

    for (const [s, d, p] of flights) {
      if (prices[s] === Number.MAX_SAFE_INTEGER) continue;
      if (prices[s] + p < tmpPrices[d]) tmpPrices[d] = prices[s] + p;
    }

    prices = tmpPrices;
  }

  return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst];
};