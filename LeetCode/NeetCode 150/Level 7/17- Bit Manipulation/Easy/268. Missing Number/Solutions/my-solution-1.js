var missingNumber = function(numArr) {

  for(let searchedNum = 0; searchedNum <= numArr.length; searchedNum++){
    let found = false;

    for(let num of numArr){
      if(searchedNum !== num) continue;
      found = true; break;
    }

    if(found === false) return searchedNum;

  }

};