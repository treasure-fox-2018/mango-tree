const fruitTree = require('./fruit_tree.js');

let Fruit = fruitTree.Fruit;
let FruitTree = fruitTree.FruitTree;

class Apple extends Fruit {
  constructor () {
      super();
  }
}

class AppleTree extends fruitTree.FruitTree {
    constructor () {
        super();
        this._name = 'apple';
        this._maxAge = super.randomize(1, 25);
        this._maxProductiveAge = this._maxAge * 0.8;
        this._matureAge = this._maxAge * 0.3;
    }

    get name() {
        return this._name;
    }
}

module.exports = AppleTree
