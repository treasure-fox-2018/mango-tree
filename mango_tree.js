"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, healthStatus, harvested, matureAge, maxGrow, deadAge) {
    this._age = age // 0
    this._height = height // 0
    this._fruits = [] // 0
    this._good = 0
    this._bad = 0
    this._healthStatus = healthStatus // true
    this._harvested = harvested // 0
    this._matureAge = matureAge // 2
    this._maxGrow = maxGrow // 10
    this._deadAge = deadAge // 15
    this._totalFruits = 0
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

  // Produce some mangoes
  produceMangoes () {
    for(let i=0; i<this._totalFruits; i++) {
      var objMango = new Mango()
      this._fruits.push(objMango)
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

class Mango {
  // Produce a mango
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

console.log('MangoTree >----------------------------> MangoTree')
console.log('The tree is alive! :smile:');
let mangoTree = new MangoTree(0, 0, 0, true, 0, 2, 7, 10)

do{
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.totalFruits} (${mangoTree.good} good, ${mangoTree.bad} bad)`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end. :sad:');


// Release 1
class AppleTree extends MangoTree {
  constructor(age, height, fruits, healthStatus, harvested, matureAge, maxGrow, deadAge){
    super()
    this._age = age // 0
    this._height = height // 0
    this._fruits = fruits // 0
    this._good = 0
    this._bad = 0
    this._healthStatus = healthStatus // true
    this._harvested = harvested // 0
    this._matureAge = matureAge // 2
    this._maxGrow = maxGrow // 10
    this._deadAge = deadAge // 15
  }
}
class Apple extends Mango{
  constructor(quality){
    super()
    this._quality = this.assignQuality()
  }
  assignQuality(){

  }
}

console.log('AppleTree >----------------------------> AppleTree')
console.log('The tree is alive! :smile:');
let appleTree = new AppleTree(0, 0, 0, true, 0, 2, 5, 7)
// let newFruits = new Mango
do{
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.totalFruits} (${appleTree.good} good, ${appleTree.bad} bad)`)
} while (appleTree.healthStatus != false)
console.log('The tree has met its end. :sad:');


// Release 2
class FruitTree {}
class Fruit {}
