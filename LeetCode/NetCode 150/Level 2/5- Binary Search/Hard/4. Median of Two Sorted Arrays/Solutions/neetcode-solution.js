const findMedianSortedArrays = (firstArr, secondArr) => {
  let A = firstArr, B = secondArr;

  const total = A.length + B.length;
  const half = Math.floor((total + 1) / 2);

  if (B.length < A.length) [A, B] = [B, A];

  let l = 0, r = A.length;

  while (l <= r) {
    const i = Math.floor((l + r) / 2), j = half - i;

    const ALeftMax = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;
    const ARightMin = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
    const BLeftMax = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
    const BRightMin = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

    if (ALeftMax <= BRightMin && BLeftMax <= ARightMin) {
      if (total % 2 !== 0) return Math.max(ALeftMax, BLeftMax);
      return (Math.max(ALeftMax, BLeftMax) + Math.min(ARightMin, BRightMin)) / 2;
    } 
    else if (ALeftMax > BRightMin) r = i - 1;
    else  l = i + 1;
  }
  return -1;
}