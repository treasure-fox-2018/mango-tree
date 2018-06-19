"use strict"

const FruitTree = require('./fruit_tree');

const Fruit = require('./fruit');

// Release 3
class PearTree extends FruitTree{
  constructor (healthStatus) {
    super();
    this._name = "Pear";
  }

  // Grow the tree
  grow () {
    var matureAge = 5;
    var stopHeightAge = 8;
    var stopFruitAge = 30;

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

  // Produce some Pear
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 9));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Pear();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

module.exports = PearTree;
