
var MyHashSet = function() { this.set = []; };

MyHashSet.prototype.add = function(key) { this.set[key] = true; };

MyHashSet.prototype.remove = function(key) { this.set[key] = false; };

MyHashSet.prototype.contains = function(key) { return !!this.set[key]; };