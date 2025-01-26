const findDuplicate = (numArr) => {
  let slowPointer = secondSlowPointer = fastPointer = 0;

  do {
    slowPointer = numArr[slowPointer];
    fastPointer = numArr[numArr[fastPointer]];
  } while (slowPointer !== fastPointer);

  do {
    slowPointer = numArr[slowPointer];
    secondSlowPointer = numArr[secondSlowPointer];
  } while (slowPointer !== secondSlowPointer);
  
  return slowPointer;
}