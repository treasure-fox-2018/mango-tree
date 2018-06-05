"use strict"

const FruitTreeArr = require("./fruit_tree.js");
let FruitTree = FruitTreeArr[0];
let Fruit = FruitTreeArr[1];

class PearTree extends FruitTree{
  constructor() {
    super()
  }
  // Grow the tree
  grow () {
    let dyingAge = 60;
    let maxHeight = 60;
    let heightGrowthParameter = (Math.random()*2) + 1;
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
    let matureAge = 10;
    if (this._age < matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }
}
class Pear extends Fruit{
  constructor() {
    super()
  }
}

module.exports = [PearTree, Pear];
