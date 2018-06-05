const fruitTree = require('./fruit_tree.js');

var Fruit = fruitTree.Fruit;
var FruitTree = fruitTree.FruitTree;

console.log('Just another APPLE TREE');

class AppleTree extends FruitTree {
    constructor() {
        super();
        this._type = 'Apple Tree';
        this._maxAge = 90;
        this._matureage = 8;
        this._maxfruit = 60;
        this._maxHeight = 10;
    }

    get type() {
        return this._type;
    }

    // grow () {
    //     this._fruits = [];
    //     this._age += 1;
    //     this._maxAge = 90;
      
    
    //     var randomize = Math.random();
    //     // console.log(randomize);
    //     if (this._age < this._maxAge) {
    //       this._height += randomize;
    //       this._height = +this._height.toFixed(1);
    //     }
        
    //     if (this._age === this._maxAge) {
    //       this._healthStatus = false;
    //     }
    //   }
}

class Apple extends Fruit {
    constructor() {
        super();
    }
}

let appleTree = new AppleTree()
 do {
   appleTree.grow();
   appleTree.produceFruit();
   appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus !== false)


module.exports = AppleTree;