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
  let currValidPaths = [this.trie], newValidPaths, wordEnd;

  for(c of word){
      newValidPaths = [], wordEnd = false;

      // There is no valid paths and the word isn't finish yet.
      if(!currValidPaths.length) return false;

      if(c !== "."){
          for(validPathInfo of currValidPaths){
              const newCharInValidPath = validPathInfo.characters[c];

              if(!newCharInValidPath) continue;

              newValidPaths.push(newCharInValidPath);
              if(newCharInValidPath.wordEnd) wordEnd = true;
          }
      }else{
          for(validPathInfo of currValidPaths)
              for(nextCharKey in validPathInfo.characters){
                  const nextCharInfo = validPathInfo.characters[nextCharKey];

                  newValidPaths.push(nextCharInfo);
                  if(nextCharInfo.wordEnd) wordEnd = true;
              }  
      }

      currValidPaths = newValidPaths;
  };

  return wordEnd;
};