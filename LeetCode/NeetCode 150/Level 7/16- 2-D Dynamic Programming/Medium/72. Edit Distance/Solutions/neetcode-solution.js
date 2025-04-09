const minDistance = (word1, word2) => {
  const dp = 
    new Array(word1.length + 1).fill(0)
      .map(() => new Array(word2.length + 1).fill(0));

  for (let j = 0; j <= word2.length; j++) 
    dp[word1.length][j] = word2.length - j;
  
  for (let i = 0; i <= word1.length; i++) 
    dp[i][word2.length] = word1.length - i;

  for (let i = word1.length - 1; i >= 0; i--)
    for (let j = word2.length - 1; j >= 0; j--)
      if (word1[i] === word2[j]) 
        dp[i][j] = dp[i + 1][j + 1];
      else
        dp[i][j] = 1 + Math.min( dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);

  return dp[0][0];
};