const combinationSum = (nums, target) => {
  let ans = [];
  let cur = [];
  backtrack(nums, target, ans, cur, 0);
  return ans;
}

const backtrack = (nums, target, ans, cur, index) => {
  if (target === 0) ans.push([...cur]);
  else if (target < 0 || index >= nums.length) return;
  else {
    cur.push(nums[index]);
    backtrack(nums, target - nums[index], ans, cur, index);

    cur.pop();
    backtrack(nums, target, ans, cur, index + 1);
  }
};