function checkInclusion(s1, s2) {
  const n = s1.length;
  const m = s2.length;

  if (n > m) return false;

  const s1Freq = new Array(26).fill(0);
  const winFreq = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    s1Freq[s1.charCodeAt(i) - 97]++;
    winFreq[s2.charCodeAt(i) - 97]++;
  }

  if (arraysEqual(s1Freq, winFreq)) return true;

  for (let i = n; i < m; i++) {
    winFreq[s2.charCodeAt(i) - 97]++;
    winFreq[s2.charCodeAt(i - n) - 97]--;

    if (arraysEqual(s1Freq, winFreq)) return true;
  }

  return false;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
}