// This solution didn't work and gives Time Limit Exceeded Problem.

/*
  I did it after getting the general idea of:
    I don't need to build the entire trie for the board, it's enough to:
      Build a trie for the words since we search on them.
      Traverse the board possibilities correspondent to the already created trie.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode{
  constructor(){
      this.characters = {};
      this.wordEnd = false;
  }
};

const createWordsTrie = (words) => {
  let wordsTrie = new TrieNode(), currTrieLevel; 

  for(word of words){
      currTrieLevel = wordsTrie;

      for(char of word){
          if(!currTrieLevel.characters[char]) 
              currTrieLevel.characters[char] = new TrieNode();
          currTrieLevel = currTrieLevel.characters[char];
      }

      currTrieLevel.wordEnd = true;
  }

  return wordsTrie;
};

const getIndicesAsString = (rowIdx, colIdx) => `${rowIdx},${colIdx}`;

const createBoardCharPaths = (rowIdx, colIdx, currWordsTrie, board, foundWords) => {
  const indicesSet = new Set();
  let strVal = "";

  const createBoardTriePaths = (rowIdx, colIdx, currWordsTrie) => {
      if(currWordsTrie.wordEnd) foundWords.add(strVal);

      const indicesAsString = getIndicesAsString(rowIdx, colIdx); 

      // Base case are: undefined char or already visited.
      if(
          rowIdx < 0 || rowIdx === board.length ||
          colIdx < 0 || colIdx === board[rowIdx].length ||
          indicesSet.has(indicesAsString)
      ) return;

      const boardChar = board[rowIdx][colIdx];

      if(!currWordsTrie.characters[boardChar]) return;

      strVal = strVal + boardChar;
      indicesSet.add(indicesAsString);

      const newWordsTrieLevel = currWordsTrie.characters[boardChar];

      createBoardTriePaths(rowIdx, colIdx - 1, newWordsTrieLevel);
      createBoardTriePaths(rowIdx - 1, colIdx, newWordsTrieLevel);
      createBoardTriePaths(rowIdx, colIdx + 1, newWordsTrieLevel);
      createBoardTriePaths(rowIdx + 1, colIdx, newWordsTrieLevel);

      strVal = strVal.slice(0, -1);
      indicesSet.delete(indicesAsString);
  };

  createBoardTriePaths(rowIdx, colIdx, currWordsTrie);
};

const createBoardTrie = (wordsTrie, board) => {
  const foundWords = new Set();

  for(let i = 0; i < board.length; ++i){
      for(let j = 0; j < board[i].length; j++){
          createBoardCharPaths(i, j, wordsTrie, board, foundWords);
      }
  };

  return foundWords;
};

var findWords = function(board, words) {
  const wordsTrie = createWordsTrie(words);

  const foundWords = createBoardTrie(wordsTrie, board);

  return Array.from(foundWords)
};