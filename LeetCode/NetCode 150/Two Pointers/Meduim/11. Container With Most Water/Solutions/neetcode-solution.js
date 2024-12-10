/**
    * @param {number[]} heights
    * @return {number}
*/
const maxArea = (heights) => {
    let l = 0;
    let r = heights.length - 1;
    let res = 0;

    while (l < r) {
        const area = Math.min(heights[l], heights[r]) * (r - l);
        res = Math.max(res, area);
        if (heights[l] <= heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
}