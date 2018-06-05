var parent = require('./fruit-tree-release2.js');

var ParentTree = parent[0];
var ParentFruit = parent[1];

class MangoTree extends ParentTree {
  constructor () {
    super();
    this._stopGrowing = 15;
    this._deadAge = 22;
    this._matureAge = 3;
  }

  produceFruit () {
    var fruitResult = [];
    if (this._totalProduce > 0) {
      for (var i = 0; i <= this._totalProduce - 1; i++) {
        var fruit = new Mango ();
        fruitResult.push(fruit.quality);
      }
      this._objFruits = {
        fruitsLength : fruitResult.length,
        fruitsArr : fruitResult
        
      }
      // console.log(this._objFruits)
      return this._objFruits
      
    }
    
  }
}

class Mango extends ParentFruit {
  constructor () {
    super();
  }
}


module.exports = [MangoTree, Mango]