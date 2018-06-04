"use strict"

// Release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._matureAge = 5
    this._maxHeightAge = 10
    this._maxAge = 20
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._isHarvest = false
    this._harvested = ''
  }

  get age() { return this._age }
  get height() { return this._height }
  get fruits() { return this._fruits }
  get healthStatus() { return this._healthStatus }
  get harvested() { return this._harvested }

  // Get current states here

  // Grow the tree
  grow () {
    let random = Math.random() * (0.9 - 0.1) + 0.1;
    let randomHeight = String(random).substring(0,3)
    
    this._age++
    if(this._age === this._matureAge) { this._isHarvest = true }
    if(this._age <= this._maxHeightAge) { this._height += +randomHeight }
    if(this._age === this._maxAge) { this._healthStatus = false }
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._isHarvest === true) {
      let randomNum = Math.round(Math.random() * (10 - 1) + 1)
      for (let i = 0; i < randomNum; i++) {
        let mango = new Mango()
        this._fruits.push(mango)
      }
    }
  }

  // Get some fruits
  harvest () {
    let counter = { good: 0, bad: 0, total: 0 }

    for (let i = 0; i < this._fruits.length; i++) {
      let quality = this._fruits[i].quality
      counter.total++
      if (quality === 'good') { counter.good++ }
      else { counter.bad++ }
    }

    this._harvested = `${counter.total} (${counter.good} good, ${counter.bad} bad)`
    this._fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this._quality = this.randomQuality();
  }

  get quality() { return this._quality }

  randomQuality() {
    let quality = ['good', 'bad']
    let index = Math.round(Math.random() * 1)
    return quality[index]
  }
}


//  driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();

   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)
  

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
