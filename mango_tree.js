"use strict"

const Impor = require('./fruitTree.js');
const Tree = Impor.pohon;
const Fruits = Impor.buah


// Release 0

class MangoTree extends Tree {
  constructor () {
    super()
    this._matureAge = 5; // starts producing
    this._die = 15; //cant produce anymore
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
    let harvested = this._harvested
    return `${harvested.total} (${harvested.good} good, ${harvested.bad} bad)`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._fruits = []
    this._harvested = {total: 0, good: 0, bad: 0};

    let randomHeight = Number((Math.random()).toFixed(1));
    let stopGrowing = 10;

    if (this._height <= stopGrowing){
      this._height = Number((this._height + randomHeight).toFixed(1));
    }

    this._age += 1;
    if (this._age === this._die){
      this._healthStatus = false;
    }
    return this;
  }

  // Produce some mangoes
  produceMangoes () {
    let quantityRandom = Math.ceil(Math.random() * 10);
    if (this._age >= this._matureAge){
      for (let i = 0; i < quantityRandom; i++){
        let fruits = new Fruits()
        this._fruits.push(fruits)
      }
    }
    return this;
  }

  // Get some fruits
  harvest () {
    var fruits = this._fruits;
    var harvested = this._harvested
    harvested.total = fruits.length

    for (let i in fruits){
      if (fruits[i]._quality === 'good'){
        harvested.good += 1
      }
      else {
        harvested.bad += 1
      }
    }

    return this;
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this._quality = this.mangoQuality()
  }

  mangoQuality(){
    let quality = ['good', 'bad']
    let indexRandom = Math.floor(Math.random() * quality.length)
    let qualityRandom = quality[indexRandom]
    return qualityRandom
  }
}



// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end. :sad:')
