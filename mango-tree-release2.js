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

}

class Mango extends ParentFruit {
  constructor () {
    super();
  }
}


module.exports = [MangoTree, Mango]