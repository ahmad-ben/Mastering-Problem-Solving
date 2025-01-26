/**
 * @param {number[]} numArr
 * @return {number[][]}
 */
var subsetsWithDup = function(numArr) {
    numArr.sort(); 

    const subset = [], subsetsArr = [[]]; 

    const generateSub = (idx) => { 
        if(idx === numArr.length) return;

        subset.push(numArr[idx]), subsetsArr.push([...subset]);

        generateSub(idx + 1);

        subset.pop();

        while(numArr[idx] === numArr[idx + 1]) ++idx;

        generateSub(idx + 1);
    };

    generateSub(0);
    return subsetsArr;
};