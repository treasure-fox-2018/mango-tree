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
    this._harvested = []
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
  // Produce some mangoes // Fix add fruit type
  produceFruits (fruit_type) {
    if (this._age >= this._matureAge && this._age <= this._dyingAge) {
      this._fruits = (Math.random()*20).toFixed()
    
      for (let i = 0; i < this._fruits; i++) {
        if (fruit_type === 'Mango') {
          let mango = new Mango()
          this._harvested.push(mango.quality)
        } else if (fruit_type === 'Apple') {
          let apple = new Apple()
          this._harvested.push(apple.quality)
        } else if (fruit_type === 'Pear') {
          let pear = new Pear()
          this._harvested.push(pear.quality)
        }
      }
    }
    return this
  }
  // Get some fruits // Fix add harvestQuality
  harvest () {
    this._good = 0
    this._bad = 0
    for (let i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i] === 'good') {
        this._good++
      } else {
        this._bad++
      }
    }
    this._harvestQuality = `(${this._good} good ${this._bad} bad)`
    this._harvested = []
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

class PearTree extends FruitTree {
  constructor(matureAge, adultAge, dyingAge) {
    super(matureAge, adultAge, dyingAge)
  }
}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

// driver code untuk release 0
console.log('The tree is alive! :smile:')
let mangoTree = new MangoTree()
do {
    mangoTree.grow();
    mangoTree.produceFruits('Mango');
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.fruits} ${mangoTree._harvestQuality}`)
  } while (mangoTree.healthStatus != false)
console.log('The tree has met its end :sad:')

let apple = new AppleTree()

console.log('The tree is alive! :smile:')
let appleTree = new AppleTree(3, 6, 7)
do {
    appleTree.grow();
    appleTree.produceFruits('Apple');
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.fruits} ${appleTree._harvestQuality}`)
  } while (appleTree.healthStatus != false)
console.log('The tree has met its end :sad:')

let pear = new PearTree()

console.log('The tree is alive! :smile:')
let pearTree = new PearTree(4, 8, 16)
do {
    pearTree.grow();
    pearTree.produceFruits('Pear');
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.fruits} ${pearTree._harvestQuality}`)
  } while (pearTree.healthStatus != false)
console.log('The tree has met its end :sad:')