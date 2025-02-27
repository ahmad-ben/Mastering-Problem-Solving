/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.characters = {};
    this.wordEnd = false;
  }
}

const createWordsTrie = (words) => {
  let wordsTrie = new TrieNode(), currTrieLevel;

  for (word of words) {
    currTrieLevel = wordsTrie;

    for (char of word) {
      if (!currTrieLevel.characters[char]) 
        currTrieLevel.characters[char] = new TrieNode();
      currTrieLevel = currTrieLevel.characters[char];
    }

    currTrieLevel.wordEnd = true;
  }

  return wordsTrie;
};

const getIndicesAsString = (rowIdx, colIdx) => `${rowIdx},${colIdx}`;

const createBoardCharPaths = (rowIdx, colIdx, currWordsTrie, board, foundWords, visited, strVal) => {
  const indicesAsString = getIndicesAsString(rowIdx, colIdx);

  // Base case: undefined char or already visited
  if (
    rowIdx < 0 || rowIdx === board.length ||
    colIdx < 0 || colIdx === board[rowIdx].length ||
    visited.has(indicesAsString)
  ) return;

  const boardChar = board[rowIdx][colIdx];

  if (!currWordsTrie.characters[boardChar]) return;

  strVal += boardChar;
  visited.add(indicesAsString);

  const newWordsTrieLevel = currWordsTrie.characters[boardChar];

  // If we've found a valid word, add it to the foundWords set
  if (newWordsTrieLevel.wordEnd) foundWords.add(strVal);

  // Recursively visit adjacent cells
  createBoardCharPaths(rowIdx, colIdx - 1, newWordsTrieLevel, board, foundWords, visited, strVal);
  createBoardCharPaths(rowIdx - 1, colIdx, newWordsTrieLevel, board, foundWords, visited, strVal);
  createBoardCharPaths(rowIdx, colIdx + 1, newWordsTrieLevel, board, foundWords, visited, strVal);
  createBoardCharPaths(rowIdx + 1, colIdx, newWordsTrieLevel, board, foundWords, visited, strVal);

  // Backtrack and unmark the visited cell
  visited.delete(indicesAsString);

  // We don't need to prune the trie here anymore, we rely on backtracking.
};

const createBoardTrie = (wordsTrie, board) => {
  const foundWords = new Set();
  const visited = new Set();

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; j++) {
      createBoardCharPaths(i, j, wordsTrie, board, foundWords, visited, "");
    }
  }

  return foundWords;
};

var findWords = function(board, words) {
  const wordsTrie = createWordsTrie(words);
  const foundWords = createBoardTrie(wordsTrie, board);
  return Array.from(foundWords);
};
