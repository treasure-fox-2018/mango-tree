var parent = require('./fruit-tree-release2.js');

var ParentTree = parent[0];
var ParentFruit = parent[1];

class PearTree extends ParentTree {
  constructor () {
    super();
    this._stopGrowing = 13;
    this._deadAge = 18;
    this._matureAge = 2;
  }

  produceFruit () {
    var fruitResult = [];
    if (this._totalProduce > 0) {
      for (var i = 0; i <= this._totalProduce - 1; i++) {
        var fruit = new Pear ();
        fruitResult.push(fruit.quality);
      }
      this._objFruits = {
        fruitsLength : fruitResult.length,
        fruitsArr : fruitResult
        
      }
      return this._objFruits      
    }
    
  }
}

class Pear extends ParentFruit {
  constructor () {
    super();
  }
}

module.exports = [PearTree, Pear]