const permute = (numArr) => {
  if (numArr.length === 0) return [[]];

  let perms = this.permute(numArr.slice(1)), res = [];
  
  for (let p of perms) {
    for (let i = 0; i <= p.length; i++) {
      let p_copy = p.slice();
      p_copy.splice(i, 0, numArr[0]);
      res.push(p_copy);
    }
  };

  return res;
};