const longestConsecutive = numArr => {
  const numSet = new Set(numArr);
  let longest = 0;
  for (let num of numSet) {
    if(numSet.has(num - 1)) continue;
    let length = 1;
    while (numSet.has(num + length)) length++;
    longest = Math.max(longest, length);
  }
  return longest;
}

/*

  The idea of this solution is simple an intelligent:
    We care about the longest sequence, so simply:
      For each item check if we have a previous value of it, if yes that means: 
        We shouldn't care about since it's not a beginning of a sequence.
          For example:
            1 -> 2 -> 3 -> 4
              There is no need for start checking the longest sequence from 2 or 3 or 4.
                Since they have a previous value they can't provide the longest sequence. 

*/