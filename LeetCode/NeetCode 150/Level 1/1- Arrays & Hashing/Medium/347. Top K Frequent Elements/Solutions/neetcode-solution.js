const topKFrequent = (numArr, k) => {
  const res = [];
  const count = {};
  const freq = Array.from({ length: numArr.length + 1 }, () => []);

  for (const n of numArr) count[n] = (count[n] || 0) + 1;
  for (const n in count) freq[count[n]].push(parseInt(n));

  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
}