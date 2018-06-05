"use strict"

// Release 2
class FruitTree {
  constructor(matureAge=1, adultAge=5, dyingAge=10) {
    this._age = 0,
    this._matureAge = matureAge,
    this._adultAge = adultAge,
    this._dyingAge = dyingAge,
    this._height = 0,
    this._fruits = 0,
    this._healthStatus = true,
    this._harvested = [],
    this._good = 0,
    this._bad = 0
  }
  get age () {
    return this._age
  }

  get matureAge () {
    return this._matureAge
  }

  get adultAge () {
    return this._adultAge
  }

  get dyingAge () {
    return this._dyingAge
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  get good () {
    return this._good
  }

  get bad () {
    return this._bad
  }
  // Get current states here
  // Grow the tree
  grow () {    
    this._age += 1
    if (this._age <= this._adultAge) {
      this._height = (Number(this._height) + Number(Math.random()*5)).toFixed(1)
    }
    if (this._age === this._dyingAge) {
      this._healthStatus = false
    }
    return this
  }
  // Produce some mangoes
  produceMangoes () {
    if (this._age >= this._matureAge && this._age < this._dyingAge) {
      this._fruits = (Math.random()*20).toFixed()
    }
    return this
  }
  // Get some fruits
  harvest () {
    for (let i = 0; i < this._fruits; i++) {
      this._harvested.push(mango.goodOrBad())
    }
    this._good = 0
    this._bad = 0
    for (let i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i] === 'good') {
        this._good++
      } else {
        this._bad++
      }
    }
  }

}

class Fruit {
  constructor (quality) {
    this.quality = this.goodOrBad()
  }
  
  goodOrBad() {
    let randomFruit = ['good', 'bad']
    return randomFruit[Math.floor(Math.random()*randomFruit.length)] //--> random 0 / 1
  }
}

// Release 0
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor (matureAge, adultAge, dyingAge) {
    super(matureAge, adultAge, dyingAge)
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}

// Release 1
class AppleTree extends FruitTree {
  constructor(matureAge, adultAge, dyingAge) {
    super(matureAge, adultAge, dyingAge)
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

let mango = new Mango()

// driver code untuk release 0
console.log('The tree is alive! :smile:')
let mangoTree = new MangoTree()
do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.fruits} (${mangoTree.good} good ${mangoTree.bad} bad)`)
  } while (mangoTree.healthStatus != false)
console.log('The tree has met its end :sad:')

let apple = new AppleTree()

console.log('The tree is alive! :smile:')
let appleTree = new AppleTree(3, 6, 7)
do {
    appleTree.grow();
    appleTree.produceMangoes();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.fruits} (${appleTree.good} good ${appleTree.bad} bad)`)
  } while (appleTree.healthStatus != false)
console.log('The tree has met its end :sad:')