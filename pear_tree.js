let importClass = require('./fruit_tree.js')

let FruitTreeClass = importClass.fruitTreeClass;
let FruitClass = importClass.fruitClass;

class PearTree extends FruitTreeClass {
  constructor() {
    super()
    //Override parent param
    this._age = 5; //start age
    this._heigth = 8;
    this._matureAge = 6;
    this._limitAge = 10;
    this._hightIncreamentLimit = 3;
    this._maxFruitsPerProduce = 5;
  }

  //Override parent produceFruitMethod
  produceFruit () {
    if (this._age >= this._matureAge) {
      let numberPear = Math.floor(Math.random()*this._maxFruitsPerProduce)
      for (let i = 0 ; i < numberPear ; i++) {
        let pear = new Pear();
        this._fruits.push(pear);
      }
    }
  }

}

class Pear extends FruitClass {
  constructor(){
    super();
  }
}

// let newPear = new PearTree()
// do {
//   newPear.grow();
//   newPear.produceFruit();
//   newPear.harvest();
//   console.log(`[Year ${newPear.age} Report] Height = ${newPear.height} m | Fruits harvested = ${newPear.harvested}`)
// } while (newPear.healthStatus === true)
// console.log("The tree has met its end.")

module.exports = PearTree;