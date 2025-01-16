class TrieNode{
  constructor(){
      this.characters = {};
      this.wordEnd = false;
  }
}

var WordDictionary = function() {
  this.trie = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let dicLevel = this.trie;
  
  for(c of word){
      if(!dicLevel.characters[c]) dicLevel.characters[c] = new TrieNode();
      dicLevel = dicLevel.characters[c];
  };

  dicLevel.wordEnd = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const isExist = (currWord, currTrieLevel) => {
      if(!currWord) return currTrieLevel.wordEnd;

      if(currWord[0] === "."){
          for(nextCharKey in currTrieLevel.characters)
            if(isExist(currWord.slice(1), currTrieLevel.characters[nextCharKey])) 
              return true;
          return false;
      }

      if(!currTrieLevel.characters[currWord[0]]) return false;

      return isExist(currWord.slice(1), currTrieLevel.characters[currWord[0]]);
  }

  return isExist(word, this.trie);
};