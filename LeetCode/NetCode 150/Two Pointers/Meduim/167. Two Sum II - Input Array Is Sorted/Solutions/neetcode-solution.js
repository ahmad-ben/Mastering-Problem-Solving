const twoSum = (numbers, target) => {
    let l = 0, r = numbers.length - 1;

    while (l < r) {
        const curSum = numbers[l] + numbers[r];

        if (curSum > target) {
            r--;
        } else if (curSum < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }
    return [];
}