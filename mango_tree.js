let importClass = require('./fruit_tree.js')

let FruitTreeClass = importClass.fruitTreeClass;
let FruitClass = importClass.fruitClass;

class MangoTree extends FruitTreeClass {
  constructor() {
    super()
    //Override parent param
    this._age = 0; //start age
    this._heigth = 2; //start high
    this._matureAge = 3;
    this._limitAge = 15;
    this._hightIncreamentLimit = 2;
    this._maxFruitsPerProduce = 30;
  }

  //Override parent produceFruitMethod
  produceFruit () {
    if (this._age >= this._matureAge) {
      let numberMango = Math.floor(Math.random()*this._maxFruitsPerProduce)
      for (let i = 0 ; i < numberMango ; i++) {
        let mango = new Mango();
        this._fruits.push(mango);
      }
    }
  }

}

class Mango extends FruitClass {
  constructor(){
    super();
  }
}

// let newMango = new MangoTree()
// do {
//   newMango.grow();
//   newMango.produceFruit();
//   newMango.harvest();
//   console.log(`[Year ${newMango.age} Report] Height = ${newMango.height} m | Fruits harvested = ${newMango.harvested}`)
// } while (newMango.healthStatus === true)
// console.log("The tree has met its end.")

module.exports = MangoTree;