"use strict"

// Release 0
class FruitTree {
  // Initialize a new FruitTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthStatus = true
    this.maxAge = 20
    this.maxHeightAge = 10
    this.mature = 2
    this.countGood = 0
    this.countBad = 0
  }

  // funfact => variable this yg ada getternya di tambah underscore kaya gini this._
  // getter buat this yg private
  get age () {
       return this._age 
    }
  get height () {
      return this._height.toFixed(2)
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

  // Grow the tree
  grow () {
    if (this._age < this.maxAge) {
      this._age++
      var randomHeight = Math.random()
      this._height += +randomHeight 
    } else {
      this._healthStatus = false 
    }
  }

  // Produce some mangoes
  produceMangoes () {

    if (this._age >= this.mature && this.age < this.maxAge && this.healthStatus === true) {
      var fruitsTotal = Math.floor(Math.random()*10) 
    }
   
    for (let i = 0; i < fruitsTotal; i++) {
      let fruit = new Fruit()
      this._fruits.push(fruit) 
    } 
  }

  // Get some fruits
  harvest () {
    for (let i = 0; this._fruits.length; i++) {
      let fruit = this._fruits[i]
      if (fruit.quality === 'good') { 
        this.countGood++
      } else if (fruit.quality=== 'bad') {
        this.countBad++
      }
      this._fruits = [] 
    }  
    this._harvested = `${this.countBad + this.countGood} (${this.countGood} Good, ${this.countBad} Bad)`
  }

}

class Fruit {

  constructor () {
    this.quality = this.qualityCheck()
  } 

  qualityCheck() {

    let goodBad = ['good','bad']
    let check = goodBad[Math.floor(Math.random()*2)]
    return check
  }
}


  // * driver code untuk Mango
  let fruitTree = new FruitTree()
  let fruit = new Fruit()

  do {
    fruitTree.grow();
    fruitTree.produceMangoes();
    fruitTree.harvest();
    console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
   } while (fruitTree.healthStatus != false)

module.export = {FruitTree,Fruit}
