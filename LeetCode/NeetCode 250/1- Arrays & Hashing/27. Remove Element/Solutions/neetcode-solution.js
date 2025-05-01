const removeElement = (arr, val) => {
  let k = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] !== val) arr[k++] = arr[i];
  return k;
};