const fruitTree = require('./fruit_tree.js');

let Fruit = fruitTree.Fruit;
let FruitTree = fruitTree.FruitTree;

class Mango extends Fruit {
  constructor () {
      super();
  }
}

class MangoTree extends FruitTree {
    constructor () {
        super();
        this._name = 'mango';
        this._maxAge = super.randomize(1, 25);
        this._maxProductiveAge = this._maxAge * 0.9;
        this._matureAge = this._maxAge * 0.4;
    }

    get name() {
        return this._name;
    }
}

module.exports = MangoTree
