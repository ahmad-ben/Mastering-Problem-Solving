/*
  This solution is correct, but it's not optimal att all.
    We can enhance it by:
      Create a Set from the words we are searching for.
      Get the string value of the trie path we are in.
      Compare between the previous two values if there are equal:
        Add the string to the found words array.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode{
  constructor(){
      this.characters = {};
  }
};

const getIndicesAsString = (rowIdx, colIdx) => `${rowIdx},${colIdx}`;

const createCharPath = (trie, board, rowIdx, colIdx) => {
  let indicesSet = new Set();

  const buildCharPath = (currTrieLevel, rowIdx, colIdx) => {
      const indicesAsString = getIndicesAsString(rowIdx, colIdx);

      // Base case are: undefined char or already visited.
      if(
          rowIdx < 0 || rowIdx === board.length ||
          colIdx < 0 || colIdx === board[rowIdx].length ||
          indicesSet.size() === 10 || indicesSet.has(indicesAsString)
      ) return;

      const currChar = board[rowIdx][colIdx];
      
      if(!currTrieLevel.characters[currChar])
          currTrieLevel.characters[currChar] = new TrieNode();
      
      indicesSet.add(indicesAsString);
      const newTrieLevel = currTrieLevel.characters[currChar];

      buildCharPath(newTrieLevel, rowIdx, colIdx - 1);
      buildCharPath(newTrieLevel, rowIdx - 1, colIdx);
      buildCharPath(newTrieLevel, rowIdx, colIdx + 1);
      buildCharPath(newTrieLevel, rowIdx + 1, colIdx);

      indicesSet.delete(indicesAsString);
  };

  buildCharPath(trie, rowIdx, colIdx);
}

const buildTrie = (board) => {
  const trie = new TrieNode();

  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
          // Create a trie path for each char in the board:
          createCharPath(trie, board, i, j);
      }
  };

  return trie;
};

const getFoundWords = (trie, words) => {
  let currTrieLevel = trie;

  for(let wordIdx = 0; wordIdx < words.length; ++wordIdx){
      currTrieLevel = trie;
      
      for(char of words[wordIdx]){
          if(!currTrieLevel.characters[char]){
              [words[wordIdx] ,words[words.length - 1]]=[words[words.length - 1],words[wordIdx]];
              words.pop();
              --wordIdx;
              break;
          }else currTrieLevel = currTrieLevel.characters[char];
              
      }
  }

  return words;
}

var findWords = function(board, words) {
  const trie = buildTrie(board);

  getFoundWords(trie, words);

  return words;
};