/**
  * @param {number[]} nums
  * @param {number} k
  * @return {number[]}
*/

const maxSlidingWindow = (nums, k) => {
  const n = nums.length;
  const output = new Array(n - k + 1);

  // The Deque Isn't a built-in DS/Class in normal JS. 
  // Leetcode adds the Deque implementation to its own JavaScript runtime environment.
  const q = new Deque();  
  let l = 0, r = 0;
  

  while (r < n) {
    while (q.size() && nums[q.back()] < nums[r]) q.popBack();
    q.pushBack(r);

    if (l > q.front()) q.popFront();

    if ((r + 1) >= k) {
      output[l] = nums[q.front()];
      l++;
    };

    r++;
  }

  return output;
};

maxSlidingWindow([1,1,1], 1)