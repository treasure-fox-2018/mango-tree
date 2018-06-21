"use strict"

class FruitTree {
  constructor (healthStatus) {
    this._healthStatus = healthStatus;
    this._age = 0;
    this._height = 0;
    this._fruitsAmount = 0;
    this._harvested = 0;
    this._arrOfObj = [];
    this._good = 0;
    this._bad = 0;
    this._name = "";
  }

  get name() {
    return this._name;
  }

  get good () {
    return this._good;
  }

  get bad () {
    return this._bad;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitsAmount;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get arrOfObj () {
    return this._arrOfObj;
  }

  // Get some fruits
  harvest () {
    this._good = 0;
    this._bad = 0;
    this._harvested = 0;

    let arrOfObjFruitsProduced = this._arrOfObj;
    for (let i = 0; i < arrOfObjFruitsProduced.length; i++) {
      if (arrOfObjFruitsProduced[i].quality === "good") {
        this._good ++;
      } else {
        this._bad ++;
      }
      this._harvested ++;
    }

    this._arrOfObj = [];

    return this._harvested;
  }


}

module.exports = FruitTree;
