const containsNearbyDuplicate = (arr, k) => {
  let set = new Set(), l = 0;
  for(let r = 0; r < arr.length; r++) {
    while(r - l > k) set.delete(arr[l++]);
    if(set.has(arr[r])) return true;
    set.add(arr[r]);
  };
  return false;
};

// The distance between an equaled pair is K or less. 
console.log(containsNearbyDuplicate([7, 8, 13, 6, 5, 6, 1], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 9, 1], 3));
console.log(containsNearbyDuplicate([6, 1, 7, 6, 3, 4], 3));
console.log(containsNearbyDuplicate([1, 2, 1, 3, 5], 1));