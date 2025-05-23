const spiralOrder = (matrix) => {
  const res = [];
  let left = top = 0, bottom = matrix.length, right = matrix[0].length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    top++;

    for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);
    right--;

    if (left === right || top === bottom) break;

    for (let i = right - 1; i >= left; i--) res.push(matrix[bottom - 1][i]);
    bottom--;
  
    for (let i = bottom - 1; i >= top; i--) res.push(matrix[i][left]);
    left++;
  }

  return res;
};