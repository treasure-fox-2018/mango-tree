let importClass = require('./fruit_tree.js')

let FruitTreeClass = importClass.fruitTreeClass;
let FruitClass = importClass.fruitClass;

class AppleTree extends FruitTreeClass {
  constructor() {
    super()
    //Override parent param
    this._age = 2; //start age
    this._heigth = 5;
    this._matureAge = 10;
    this._limitAge = 25;
    this._hightIncreamentLimit = 2;
    this._maxFruitsPerProduce = 20;
  }

}

class Apple extends FruitClass {
  constructor(){
    super();
  }
}

module.exports = AppleTree;