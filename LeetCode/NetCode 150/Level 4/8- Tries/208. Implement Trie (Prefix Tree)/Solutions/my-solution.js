
var Trie = function() {
  this.characters = {}, this.wordEnd = false;
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let trieLevel = this;

  for(c of word){ 
      if(!trieLevel.characters[c]) trieLevel.characters[c] = new Trie();
      trieLevel = trieLevel.characters[c];
  };

  trieLevel.wordEnd = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let trieLevel = this;

  for(c of word){
      if(!trieLevel.characters[c]) return false;
      trieLevel = trieLevel.characters[c];
  }

  return trieLevel.wordEnd;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let trieLevel = this;

  for(c of prefix){
      if(!trieLevel.characters[c]) return false;
      trieLevel = trieLevel.characters[c];
  }

  return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/