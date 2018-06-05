const fruitTree = require('./fruit_tree.js');

var Fruit = fruitTree.Fruit;
var FruitTree = fruitTree.FruitTree;

console.log('Just another PEAR TREE');

class PearTree extends FruitTree {
    constructor() {
        super();
        this._type = 'Pear Tree';
        this._maxAge = 20;
        this._matureage = 4;
        this._maxfruit = 40;
        this._maxHeight = 6;
    }

    get type() {
        return this._type;
    }
}

class Pear extends Fruit {
    constructor() {
        super();
    }
}

let pearTree = new PearTree()
 do {
   pearTree.grow();
   pearTree.produceFruit();
   pearTree.harvest();
   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
 } while (pearTree.healthStatus !== false)


module.exports = PearTree;