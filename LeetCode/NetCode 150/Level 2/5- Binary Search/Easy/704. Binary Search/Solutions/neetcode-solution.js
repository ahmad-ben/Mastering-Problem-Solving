/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number}
 */

search(numArr, target) {
  let l = 0;
  let r = numArr.length - 1;

  while (l <= r) {
    // Calculate method to find the middle idx, specially useful when having a huge array.
    const m = l + Math.floor((r - l) / 2); 

    if (numArr[m] > target) r = m - 1;
    else if (numArr[m] < target) l = m + 1;
    else return m;
  }
  return -1;
}