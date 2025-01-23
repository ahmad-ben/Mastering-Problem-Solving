/**
 * @param {string} s
 * @return {string[][]}
 */

const isStrPalindrome = (str) => {
    let leftIdx = 0, rightIdx = str.length - 1;

    while(leftIdx < rightIdx){
        if(str[leftIdx] !== str[rightIdx]) return false;
        ++leftIdx, --rightIdx;
    }

    return true;
}

var partition = function(s) {
    const curSubsetArr = [], subsetsArr = [];

    const findSubsets = (idx, currStr) => {
        if(idx === s.length) return subsetsArr.push([...curSubsetArr]);

        let nextStr = currStr + s[idx];

        if(isStrPalindrome(nextStr)) {
            curSubsetArr.push(nextStr)
            findSubsets(idx + 1, "");
            curSubsetArr.pop(nextStr)
        }

        if(idx + 1 < s.length) findSubsets(idx + 1, nextStr);
    };

    findSubsets(0, "");
    return subsetsArr;
};