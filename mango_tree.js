"use strict"

// Release 0

class FruitTree {
  // Initialize a new MangoTree
  
  constructor (maxAge,matureAge,maxFruit) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0
    
    this.maxAge = maxAge 
    this.matureAge = matureAge
    this.maxFruit = maxFruit
  }
  
  get age () {
    return this._age
  }
  
  get height () {
    return this._height + 'm'
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
    this._age += 1
    if(this._age < this.maxAge){
      this._height += Math.floor(Math.random()*2)
    }
    else{
      this._healthStatus = false
    }
  }
  
  // Produce some mangoes
  produceMangoes () {
    var mangoes = new Mango()
    var fruits = 0
    if(this._age>=this.matureAge){
      fruits = Math.floor(Math.random()*this.maxFruit)
    }
    for(let i = 0; i < fruits; i++){
      this._fruits.push(mangoes)
    }
    // return this._fruits
  }
  
  // Get some fruits
  harvest () {
    var countFruits = this._fruits.length
    var good = 0
    var bad = 0
    for (let i = 0; i < countFruits; i++) {
      if(this._fruits[i].quality=='bad'){
        bad++
      }else{
        good++
      }
      
    }
    this._harvested = ` (${good} good , ${bad} bad)`;
    // return this._harvested;
  }
  
}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality = this.qualityFruits()
  }
  qualityFruits(){
    var quality = ['good','bad']
    var randomQuality = quality[Math.floor(Math.random()*quality.length)]
    return randomQuality
  }
}


// console.log(mangoTree.harvest());

// Release 1
class AppleTree extends FruitTree{
  constructor(maxAge,matureAge,maxFruit){
    super(maxAge,matureAge,maxFruit)
  }
  
}
class Apple extends Fruit{
  constructor(){
    super()
  }
}

// Release 2
class MangoTree extends FruitTree{
  constructor(maxAge,matureAge,maxFruit){
    super(maxAge,matureAge,maxFruit)
  }
  
}
class Mango extends Fruit{
  constructor(){
    super()
  }
}

class PearTree extends FruitTree{
  constructor(maxAge,matureAge,maxFruit){
    super(maxAge,matureAge,maxFruit)
  }
  
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

let fruitTree = new FruitTree(30,5,20)
let appleTree = new AppleTree(10,2,35)
let mangoTree = new MangoTree(15,3,25)
let pearTree = new PearTree(13,2,20)

console.log(`The Apple tree is alive! :smile:`)
console.log('-----------------------------------------------------------------------------')

do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  //  mangoTree.fruits
  console.log(`[Year ${appleTree.age} Report] Height =  ${appleTree.height} | Fruits harvested = ${appleTree.fruits.length} ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

console.log('-----------------------------------------------------------------------------')
console.log(`The Apple tree has met its end. :sad:`)
console.log('-----------------------------------------------------------------------------')



console.log(`The Mango tree is alive! :smile:`)
console.log('-----------------------------------------------------------------------------')
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  //  mangoTree.fruits
  console.log(`[Year ${mangoTree.age} Report] Height =  ${mangoTree.height} | Fruits harvested = ${mangoTree.fruits.length} ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log('-----------------------------------------------------------------------------')
console.log(`The Mango tree has met its end. :sad:`)
console.log('-----------------------------------------------------------------------------')



console.log(`The Pear tree is alive! :smile:`)
console.log('-----------------------------------------------------------------------------')
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harvest();
  //  mangoTree.fruits
  console.log(`[Year ${pearTree.age} Report] Height =  ${pearTree.height} | Fruits harvested = ${pearTree.fruits.length} ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)

console.log('-----------------------------------------------------------------------------')
console.log(`The Pear tree has met its end. :sad:`)
console.log('-----------------------------------------------------------------------------')