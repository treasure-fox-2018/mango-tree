"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor (matureAge, maxGrow, deadAge) {
    this._age = 0 // 0
    this._height = 0 // 0
    this._fruits = [] // 0
    this._good = 0
    this._bad = 0
    this._healthStatus = true // true
    this._harvested = 0 // 0
    this._totalFruits = 0
    this._matureAge = matureAge
    this._maxGrow = maxGrow
    this._deadAge = deadAge

  }

  get age () {
    return this._age
  }
  get height () {
    return this._height
  }
  get fruits () {
    return this._fruits
  }
  get good () {
    return this._good
  }
  get bad () {
    return this._bad
  }
  get healthStatus () {
    return this._healthStatus
  }
  get harvested () {
    return this._harvested
  }
  get totalFruits () {
    return this._totalFruits
  }

  // Get current states here

  // Grow the tree
  grow () {
    let randomNumber = Math.random()
    this._age += 1;

    if (this._age < this._maxGrow) {
      this._height += randomNumber;
      this._height = +this._height.toFixed(1)
    }
    if (this._age > this._matureAge) {
      this._totalFruits = Math.floor(randomNumber*10);
    }
    if (this._age >= this._deadAge) {
      this._healthStatus = false;
    }

  }

  // Produce some fruits
  produceFruits () {
    for(let i=0; i<this._totalFruits; i++) {
      var objFruit = new Fruit()
      this._fruits.push(objFruit)
    }
  }

  // Get some fruits
  harvest () {
    // looping dari this.fruits
    this._good = 0;
    this._bad = 0;

    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'good') {
        this._good++;
      }else if (this._fruits[i]._quality === 'bad') {
        this._bad++;
      }
    }
    this._fruits = [];
  }
}

class Fruit {
  // Produce a fruit
  constructor () {
    this._quality = this.assignQuality()
  }

  assignQuality(){
    let qualityFruits = Math.floor(Math.random()*2);
    if (qualityFruits === 0) {
      return 'good';
    }else {
      return 'bad';
    }
  }
}



module.exports = {
  FruitTree, Fruit
}
