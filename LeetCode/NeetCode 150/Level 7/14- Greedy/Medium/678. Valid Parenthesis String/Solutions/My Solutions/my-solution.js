var checkValidString = function(s) {
  let potentialValueSet = new Set(); potentialValueSet.add(0);

  for(let char of s){
    let newSetValArr = [];

    if(char !== "(")
      potentialValueSet
        .forEach((val) => (val + 1 <= 0) && newSetValArr.push(val + 1));

    if(char !== ")")
      potentialValueSet
        .forEach((val) => (val - 1 <= 0) && newSetValArr.push(val - 1));

    if(char === "*")
      potentialValueSet
        .forEach((val) => newSetValArr.push(val));

    potentialValueSet.clear();
    newSetValArr.forEach(val => potentialValueSet.add(val));
  }

  return potentialValueSet.has(0);
};