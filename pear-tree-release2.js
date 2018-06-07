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

}

class Pear extends ParentFruit {
  constructor () {
    super();
  }
}

module.exports = [PearTree, Pear]