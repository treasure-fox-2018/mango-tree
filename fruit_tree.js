"use strict";

class FruitTree {
  constructor(maxAge, matureAge) {
    this._maxAge = maxAge;
    this._matureAge = matureAge;
    this._totalFruit = 0;
    this._healtStatus = true;
    this._qualityFruit = [];
    this._age = 0;
    this._fruits = [];
    this._height = 0;
    this._harvest = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healtStatus;
  }

  get harvested() {
    return this._harvest;
  }

  grow() {
    this._age += 1;
    let height = this._height;

    if (this._height < 3) {
      this._height += Math.random() * 0.5 + 0.5;
    }

    if (this._age === this._maxAge) {
      this._healtStatus = false;
    }
  }

  produce() {
    this._qualityFruit = [];
    let random = Math.floor(Math.random() * 10 + 5);

    if (this._age >= this._matureAge) {
      for (let i = 0; i < random; i++) {
        var newMango = new Fruit();
        this._qualityFruit.push(newMango.quality());
      }
    }
  }

  harvest() {
    let goodFruit = 0
    let badFruit = 0
    let qualityFruits = this._qualityFruit
    let totalFruits = qualityFruits.length

    for (let i = 0; i < qualityFruits.length; i++) {
      if (qualityFruits[i] === 'Good') {
        goodFruit++
      } else if (qualityFruits[i] === 'Bad') {
        badFruit++
      }
    }
    this._harvest = `${totalFruits} (${goodFruit} Good, ${badFruit} Bad)`
  }
}

class Fruit {
  constructor() {}

  quality() {
    let qualitys = ["Good", "Bad"];
    let angkaRandom = Math.floor(Math.random() * 2);
    return qualitys[angkaRandom];
  }
}

module.exports = [FruitTree, Fruit]
