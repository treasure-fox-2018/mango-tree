"use strict"

const FruitTree = require('./fruit_tree');

const Fruit = require('./fruit');

// Release 1
class AppleTree extends FruitTree{
  constructor (healthStatus) {
    super();
    this._name = "Apple"
  }

  // Grow the tree
  grow () {
    var matureAge = 3;
    var stopHeightAge = 9;
    var stopFruitAge = 20;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produce ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 6));
      }
    }

  }

  // Produce some Apples
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 6));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Apple();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

module.exports = AppleTree;
