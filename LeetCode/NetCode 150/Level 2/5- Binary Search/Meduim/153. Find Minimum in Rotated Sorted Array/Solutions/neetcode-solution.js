const findMin = (numArr) => {
  let l = 0, r = numArr.length - 1, minNum = numArr[0];

  while (l <= r) {
    if (numArr[l] <= numArr[r]) {
      minNum = Math.min(minNum, numArr[l]);
      break;
    }

    let m = l + Math.floor((r - l) / 2);
    minNum = Math.min(minNum, numArr[m]);

    if (numArr[m] >= numArr[l]) l = m + 1;
    else r = m - 1;
  }
  return minNum;
}

// l     m        r
//[5, 7, 9, 0, 2, 4] min => 9

//          l  m  r
//[5, 7, 9, 0, 2, 4] min => 0 "L <= R"