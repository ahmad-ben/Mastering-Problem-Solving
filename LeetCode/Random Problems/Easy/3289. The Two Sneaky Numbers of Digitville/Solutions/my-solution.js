var getSneakyNumbers = function(numArr) {
    const counterObj = {}, outputArr = [];

    for(let num of numArr){
        if(!counterObj[num]) counterObj[num] = 1;
        else outputArr.push(num);
    };

    return outputArr;
};