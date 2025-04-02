var defangIPaddr = function(address) {
  let defangedIpVersion = "";

  for(let char of address){
    if(char === ".") defangedIpVersion += "[.]";
    else defangedIpVersion += char;
  }

  return defangedIpVersion;
};