"use strict"

// const FruitTree = require('./fruit_tree.js');
// console.log(FruitTree.fruitTree)
// FruitTree.FruitTree
// Release 0

class FruitTree {
  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._maxHeight = 3
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0
    this._maxAge = 10
    this._matureAge = 3
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
    return this._harvested
  }
  
  // Get current states here
  
  // Grow the tree
  grow () {
    let randomHeight = Math.random()
    this._age++
    if(this._age <this._maxAge){
      if(this._height<this._maxHeight){
        var newHeight = this._height + randomHeight
        this._height = +newHeight.toFixed(2) 
      }
    }else{
      this._healthStatus = false
    }
  }
  
  // Produce some mangoes
  produceFruits () {
    let countFruit = Math.round(Math.random()*10)
    if(this._age > this._matureAge){
      for(let i = 0; i<countFruit; i++){
        var manga = new Fruit;
        this._fruits.push(manga)
      }
    }
  }
  
  // Get some fruits
  harvest () {
    let countGood = 0
    let countBad = 0
    for(let i = 0; i<this._fruits.length; i++){
      if(this._fruits[i]._quality === 'good'){
        countGood++
      }else if(this._fruits[i]._quality === 'bad'){
        countBad++
      }
    }
    this._fruits = []
    this._harvested = `${countGood+countBad} (${countGood} good, ${countBad} bad)`;
  }
}

class Fruit {
  constructor () {
    this._quality=this.quality()
  }
  quality(){
    let arrQuality = ['good','bad']
    let randomIndex = Math.round(Math.random())
    return arrQuality[randomIndex]
  }
}


class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super()
    this._maxAge = 15
    this._maxHeight = 2
    this._matureAge = 2
    
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super()
  }
}

// Release 1
class AppleTree extends FruitTree {
  
  // Initialize a new MangoTree
  constructor () {
    super()
    this._maxAge = 20
    this._matureAge = 4
    this. _maxHeight = 2
  }
}

class Apple extends Fruit {
  constructor () {
    super()
  }
}

// Release 2
//  driver code untuk release 0
let mangoTree = new MangoTree()
let appleTree = new AppleTree();


 do {
     mangoTree.grow();
     mangoTree.produceFruits();
     mangoTree.harvest();
     console.log(`Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
console.log('\n')
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)

  
