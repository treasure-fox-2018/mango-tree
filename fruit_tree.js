"use strict"

class FruitTree {
  constructor () {
    this._age = 0;
    this._matureAge = 5;
    this._height = 0;
    this._fruits = 0;
    this._harvested = null;
    this._healthStatus = true;
    this._totalFruitsProduced = 0;
    this._totalGoodFruitsProduced = 0;
    this._totalBadFruitsProduced = 0;
    this._fruitQuality = null;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get totalFruitsProduced () {
    return this._totalFruitsProduced;
  }

  get totalGoodFruitsProduced () {
    return this._totalGoodFruitsProduced;
  }

  get totalBadFruitsProduced () {
    return this._totalBadFruitsProduced;
  }

  // Grow the tree
  grow () {
    let dyingAge = 20;
    let maxHeight = 5.2;
    let heightGrowthParameter = (Math.random()*0.9) + 0.1;
    this._age += 1;
    if (this._height < maxHeight) {
      let heightGrowth = heightGrowthParameter;
      this._height += heightGrowth;
    }
    if (this._age === dyingAge) {
      this._healthStatus = false;
    }
  }

  // Produce some fruits
  produceFruits () {
    if (this._age < this._matureAge) {
      return this._fruits = 0;
    }
    let fruitsProduced = Math.floor((Math.random()*15) + 1);
    this._totalFruitsProduced += fruitsProduced;
    return this._fruits = fruitsProduced;
  }

  // Get some fruits
  harvest () {
    let fruits = this._fruits;
    let goodFruits = 0;
    let badFruits = 0;

    while (fruits > 0) {
      this._fruitQuality = new Fruit().quality();
      if (this._fruitQuality == 'good') {
        this._totalGoodFruitsProduced += 1;
        goodFruits += 1;
        fruits -= 1;
      }else if (this._fruitQuality == 'bad') {
        this._totalBadFruitsProduced += 1;
        badFruits += 1;
        fruits -= 1;
      }
    }
    this._harvested = `${this._fruits} (${goodFruits} good, ${badFruits} bad)`;
  }
}
class Fruit {
  constructor () {
    this._quality = null;
  }
  quality () {
    var goodBadArr = ['good','bad'];
    var goodBad = goodBadArr[Math.floor(Math.random()*goodBadArr.length)];
    return this._quality = goodBad;
  }
}

module.exports = [FruitTree, Fruit];
