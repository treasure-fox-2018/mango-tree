"use strict"

const FruitTree = require('./fruit_tree');

const Fruit = require('./fruit');

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (healthStatus) {
    super ();
    this._name = "Mango";
  }

  // Grow the tree
  grow () {
    var matureAge = 3;
    var stopHeightAge = 10;
    var stopFruitAge = 15;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produce ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 5));
      }
    }

  }

  // Produce some mangoes
  produce () {
    let additonalAmount = (Math.trunc(Math.random() * 10));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Mango();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }



}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super();
  }

}

module.exports = MangoTree;
