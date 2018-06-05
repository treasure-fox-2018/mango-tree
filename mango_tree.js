"use strict"

const FruitTreeArr = require("./fruit_tree.js");
let FruitTree = FruitTreeArr[0];
let Fruit = FruitTreeArr[1];

class MangoTree extends FruitTree{
  constructor () {
    super()
  }
  // Grow the tree
  grow () {
    let dyingAge = 15;
    let maxHeight = 7;
    let heightGrowthParameter = (Math.random()*0.9) + 0.1;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age > dyingAge) {
      this._healthStatus = 'dead';
    }
  }

  // Produce some fruits
  produceFruits () {
    this._matureAge = 3;
    if (this._age < this._matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }
}
class Mango extends Fruit {
  constructor() {
    super()
  }
}


module.exports = MangoTree;
