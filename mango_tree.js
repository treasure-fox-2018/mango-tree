"use strict"

// Release 2
class FruitTree {
  constructor() {
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
  grow() {
    let random = Math.random() * (0.9 - 0.1) + 0.1;
    let randomHeight = String(random).substring(0,3)
    
    this._age++
    if(this._age === this._matureAge) { this._isHarvest = true }
    if(this._age <= this._maxHeightAge) { this._height += +randomHeight }
    if(this._age === this._maxAge) { this._healthStatus = false }
  }

  produceFruits() {
    if (this._isHarvest === true) {
      let randomNum = Math.round(Math.random() * (10 - 1) + 1)
      for (let i = 0; i < randomNum; i++) {
        let fruit = new Fruit()
        this._fruits.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest() {
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

class Fruit {
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

// Release 0
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor () {
    super();
    this._matureAge = 5
    this._maxHeightAge = 10
    this._maxAge = 20
  }

  get age() { return this._age }
  get height() { return this._height }
  get fruits() { return this._fruits }
  get healthStatus() { return this._healthStatus }
  get harvested() { return this._harvested }

  // Produce some mangoes
  produceMangoes() {
    if (this._isHarvest === true) {
      let randomNum = Math.round(Math.random() * (10 - 1) + 1)
      for (let i = 0; i < randomNum; i++) {
        let mango = new Mango()
        this._fruits.push(mango)
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super();
  }

  get quality() { return this._quality }
}

// Release 1
class AppleTree extends FruitTree {
  constructor () {
    super();
    this._matureAge = 3
    this._maxHeightAge = 12
    this._maxAge = 18
  }

  get age() { return this._age }
  get height() { return this._height }
  get fruits() { return this._fruits }
  get healthStatus() { return this._healthStatus }
  get harvested() { return this._harvested }

  produceApples() {
    if (this._isHarvest === true) {
      let randomNum = Math.round(Math.random() * (10 - 1) + 1)
      for (let i = 0; i < randomNum; i++) {
        let apple = new Apple()
        this._fruits.push(apple)
      }
    }
  }
}

class Apple extends Fruit {
  constructor () {
    super();
  }

  get quality() { return this._quality }
}

//  driver code

// Mango Tree
let mangoTree = new MangoTree()
console.log('=====Mango Tree=====')
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  // console.log(mangoTree)
  mangoTree.harvest();

  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

// Apple Tree
let appleTree = new AppleTree()
console.log('=====Apple Tree=====')
do {
  appleTree.grow();
  appleTree.produceApples();
  // console.log(appleTree)
  appleTree.harvest();

  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)