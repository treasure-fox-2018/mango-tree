"use strict"

// Release 0

class MangoTree {

  constructor (maxAge, matureAge) {
    this._age = 0
    this._height = 0
    this._qualityFruit = []
    this._healthStatus = true
    this._harvest = 0
    this._maxAge = Math.round(Math.random() * 5 + maxAge)
    this._matureAge = Math.round(Math.random() * 10 + matureAge)
    this._goodFruit = 0
    this._badFruit = 0
    this._totalFruit = 0
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

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvest
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1
    let height = this._height
    if (this._age <= this._matureAge) {
      this._height += (Math.random() * 10)
    }
    
    if (this._age >= this._maxAge) {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let quality = ['Good', 'Bad']
    let randomQuality = Math.floor(Math.random() * quality.length)
    
    if (this._age >= this._matureAge) {
      this._qualityFruit.push(quality[randomQuality])
    }
  }

  // Get some fruits
  harvest () {
    for (let i = 0; i < this._qualityFruit.length; i++) {
      if (this._qualityFruit[i] === 'Good') {
        this._goodFruit++
        this._totalFruit++
      } else {
        this._badFruit++
        this._totalFruit++
      }
    }
    this._harvest = `${this._totalFruit} (${this._goodFruit} Good, ${this._badFruit} Bad)`
  }

}

class Mango {
  // Produce a mango
  constructor () {
    
  }
}

const mangoTree = new MangoTree(5, 30)

console.log('             ==========> MANGO <==========         ')
console.log('The tree is alive! :D')
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} repot] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end :(')


/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
