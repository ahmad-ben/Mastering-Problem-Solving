const findDuplicate = numArr => {
  let slow = fast = slow2 = 0;

  while (true) {
    slow = numArr[slow];
    fast = numArr[numArr[fast]];

    if (slow === fast) break;
  }

  while (true) {
    slow = numArr[slow];
    slow2 = numArr[slow2];

    if (slow === slow2) return slow;
  }
}