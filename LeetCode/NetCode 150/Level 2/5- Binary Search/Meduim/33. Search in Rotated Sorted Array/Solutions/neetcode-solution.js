class Solution {
    /**
     * @param {number[]} numArr
     * @param {number} target
     * @return {number}
     */
    search(numArr, target) {
        let l = 0, r = numArr.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === numArr[mid]) {
                return mid;
            }

            if (numArr[l] <= numArr[mid]) {
                if (target > numArr[mid] || target < numArr[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < numArr[mid] || target > numArr[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}