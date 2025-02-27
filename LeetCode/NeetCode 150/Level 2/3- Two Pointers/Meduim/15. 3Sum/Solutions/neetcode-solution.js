/**
 * @param {number[]} nums
 * @return {number[][]}
 */

threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // Since the base value is larger than 0, that means the coming left and right also the same.
        // Ao the three values are bigger than 0 so no need for continue the counting anymore.
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }
    return res;
};