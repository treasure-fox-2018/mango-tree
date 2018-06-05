"use strict"


class FruitTree {

  constructor () {
    this._age = 0;
    this._heigth = 0;
    this._fruits = [];
    this._healthStatus = true;
    this._harvested = 0;
    this._matureAge = 5;
    this._limitAge = 20;
    this._hightIncreamentLimit = 1;
    this._maxFruitsPerProduce = 10;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._heigth.toFixed(1);
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

  // Get current states here

  // Grow the tree
  grow () {
    if (this._age === 0) {
      console.log("The tree is alive!")
    }
    this._age++;
    this._heigth += Math.random()*this._hightIncreamentLimit; //add random height from 0 to age increament limit
    if (this._age === this._limitAge) {
      this._healthStatus = false;
    }
  }

  produceFruit () {
    if (this._age >= this._matureAge) {
      let numberManggo = Math.floor(Math.random()*this._maxFruitsPerProduce)
      for (let i = 0 ; i < numberManggo ; i++) {
        let fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
    // console.log(this._fruits);
  }

  // Get some fruits
  harvest () {
    let countGood = 0;
    let countBad = 0;
    for (let i = 0 ; i < this._fruits.length ; i++) {
      if (this._fruits[i].quality === "Good") {
        countGood++;
      } else countBad++;
    }
    this._harvested = `${this._fruits.length} (${countGood} Good, ${countBad} Bad)`
    this._fruits = [];
  }

}

class Fruit {
  constructor () {
    this._quality = this.randomQuality()
  }

  get quality () {
    return this._quality;
  }

  randomQuality () {
    let listQuality = ["Good","Bad"];
    let random = listQuality[Math.floor(Math.random()*listQuality.length)];
    return random;
  }
}

module.exports = {
  fruitTreeClass : FruitTree,
  fruitClass : Fruit
}