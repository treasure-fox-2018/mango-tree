const fruitTree = require('./fruit_tree.js');

var Fruit = fruitTree.Fruit;
var FruitTree = fruitTree.FruitTree;

console.log('Just another MANGO TREE');

class MangoTree extends FruitTree {
    constructor() {
        super();
        this._type = 'Mango Tree';
        this._maxAge = 30;
        this._matureage = this._maxAge * 0.15;
        this._maxfruit = 30;
        this._maxHeight = 40;
    }

    get type() {
        return this._type;
    }
}

class Mango extends Fruit {
    constructor() {
        super();
    }
}

let mangoTree = new FruitTree()
 do {
   mangoTree.grow();
   mangoTree.produceFruit();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus !== false)

module.exports = MangoTree