/**
  * @param {string} string
  * @param {string} subStr
  * @return {string}
*/

const minWindow = (string, subStr) => {
  if (subStr === "") return "";

  let searchedStrChar = {}, stringChar = {};

  for (let c of subStr) searchedStrChar[c] = searchedStrChar[c] + 1 || 1;

  let have = 0, need = Object.keys(searchedStrChar).length, leftEdge = 0;
  let smallEdges = [-1, -1], smallLen = Infinity;

  for (let rightEdge = 0; rightEdge < string.length; rightEdge++) {
    let rightChar = string[rightEdge];

    stringChar[rightChar] = (stringChar[rightChar] || 0) + 1;

    if (stringChar[rightChar] === searchedStrChar[rightChar]) have++;

    while (have === need) {
      if ((rightEdge - leftEdge + 1) < smallLen) {
        smallLen = rightEdge - leftEdge + 1;
        smallEdges = [leftEdge, rightEdge];
      }

      stringChar[string[leftEdge]]--;
      if (stringChar[string[leftEdge]] < searchedStrChar[string[leftEdge]]) have--;
      leftEdge++;
    }
  }

  return smallLen === Infinity ? "" : string.slice(smallEdges[0], smallEdges[1] + 1);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
