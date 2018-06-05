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

  //Override parent produceFruitMethod
  produceFruit () {
    if (this._age >= this._matureAge) {
      let numberApple = Math.floor(Math.random()*this._maxFruitsPerProduce)
      for (let i = 0 ; i < numberApple ; i++) {
        let apple = new Apple();
        this._fruits.push(apple);
      }
    }
  }

}

class Apple extends FruitClass {
  constructor(){
    super();
  }
}

// let newApple = new AppleTree()
// do {
//   newApple.grow();
//   newApple.produceFruit();
//   newApple.harvest();
//   console.log(`[Year ${newApple.age} Report] Height = ${newApple.height} m | Fruits harvested = ${newApple.harvested}`)
// } while (newApple.healthStatus === true)
// console.log("The tree has met its end.")

module.exports = AppleTree;