var finalValueAfterOperations = function(operations) {
  let value = 0;

  for(let operation of operations){
    if(operation === "++X" || operation === "X++") ++value;
    else --value;
  };

  return value;
};