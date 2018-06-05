"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age = 0 , height = 0, healthStatus = true, harvested = 0, matureAge = 5, limitAge = 20) {
    this._age = age;
    this._heigth = height;
    this._fruits = [];
    this._healthStatus = healthStatus;
    this._harvested = harvested;
    this._matureAge = matureAge;
    this._limitAge = limitAge;
    this._ageIncreamentLimit = 1;
    this._maxFruitsPerProduce = 15;
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
    this._heigth += Math.random()*this._ageIncreamentLimit; //add random height from 0 to age increament limit
    if (this._age === this._limitAge) {
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._age > this._matureAge) {
      let numberManggo = Math.floor(Math.random()*this._maxFruitsPerProduce)
      for (let i = 0 ; i < numberManggo ; i++) {
        let manggo = new Mango();
        this._fruits.push(manggo);
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

class Mango {
  // Produce a mango
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


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus === true)
console.log("The tree has met its end.")
// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
