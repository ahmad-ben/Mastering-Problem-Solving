const findKthLargest = (numArr, k) => {
  k = numArr.length - k;

  const quickSelect = (left, right) => {
    let pivot = numArr[right], p = left;

    for (let i = left; i < right; i++) {
      if(numArr[i] > pivot) continue;

      [numArr[p], numArr[i]] = [numArr[i], numArr[p]];
      p++;
    }

    [numArr[p], numArr[right]] = [numArr[right], numArr[p]];

    if (p > k) return quickSelect(left, p - 1);
    else if (p < k) return quickSelect(p + 1, right);
    else return numArr[p];
  };

  return quickSelect(0, numArr.length - 1);
};