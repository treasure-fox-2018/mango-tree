"use strict";

class FruitTree {
  constructor(maxAge, matureAge) {
    this._maxAge = maxAge;
    this._matureAge = matureAge;
    this._healtStatus = true;
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
    let isMature = this._height < this._matureAge
    
    if (isMature) {
      this._height += Math.random() * 0.5 + 0.5;
    }

    let isHealthy = this._age < this._maxAge
    this._healtStatus = isHealthy;

  }

  produce() {
    let random = Math.floor(Math.random() * 10 + 5);
    if (this._age >= this._matureAge) {
      for (let i = 0; i < random; i++) {
        let newFruit = new Fruit()
        this._fruits.push(newFruit);
      }
    }
  }

  harvest() {
    let goodFruit = 0
    let badFruit = 0
    let qualityFruits = this._fruits
    let totalFruits = qualityFruits.length

    for (let i = 0; i < qualityFruits.length; i++) {
      if (qualityFruits[i]._quality === 'Good') {
        goodFruit++
      } else if (qualityFruits[i]._quality === 'Bad') {
        badFruit++
      }
    }
    this._harvest = `${totalFruits} (${goodFruit} Good, ${badFruit} Bad)`
  }
}

class Fruit {
  constructor() {
    this._quality = this.quality()
  }

  get quality() {
    return this._quality
  }

  quality() {
    let qualitys = ["Good", "Bad"];
    let random = Math.floor(Math.random() * 2);
    return qualitys[random]
  }
}

const tes = new FruitTree()

module.exports = [FruitTree, Fruit]
