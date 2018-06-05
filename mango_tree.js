"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._healthStatus = []
    this._harvested = 0
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    var num = Math.floor(Math.random() * 9) + 1
    this._fruits = num
    return this._fruits
  }

  get healthStatus () {
    var mature_age = 10
    var not_grow_age = 5
    var dead_age = 20

    if (this.age < dead_age ) {
      return true
    }else{
      return false
    }
  }

  get harvested () {
    this.harvest()
    return this._harvested
  }

  // Get current states here

  
  // Grow the tree
  grow () {
    this._age++

    var num = ((Math.random().toFixed(1) * 2))
    this._height += num  

    return this
  }

  // Produce some mangoes
  produceMangoes () {
    
    let mangga = new Mango(this.healthStatus,this.fruits)
  }

  // Get some fruits
  harvest () {
    
    var arrStatus = []
    var counterGood = 0
    var counterBad = 0
    for (let i = 0; i < this._fruits; i++) {
      var num = Math.floor(Math.random() * 2)
      if (num == 1) {
        arrStatus.push('good')
        counterGood++ 
      }else{
        arrStatus.push('bad') 
        counterBad++
      }
    }
    
    this._healthStatus = arrStatus
    
    this._harvested = `${this._fruits} (${counterGood} good, ${counterBad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor (status,fruits) {
    this._status = status
    this._fruits = fruits
  }
}

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
 let mangoTree = new MangoTree()
  do {
    console.log('The tree is alive :smile:');
    
    mangoTree.grow();
    mangoTree.produceMangoes();
    // console.log(mangoTree);
    
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  console.log('The tree has met its end. :sad:');
  
// Release 1
class AppleTree extends MangoTree{  
  constructor(){
    super()
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    var num = Math.floor(Math.random() * 9) + 1
    this._fruits = num
    return this._fruits
  }

  get healthStatus () {
    var mature_age = 8
    var not_grow_age = 7
    var dead_age = 15

    if (this.age < dead_age ) {
      return true
    }else{
      return false
    }
  }

  get harvested () {
    this.harvest()
    return this._harvested
  }

  // Get current states here

  
  // Grow the tree
  grow () {
    this._age++

    var num = ((Math.random().toFixed(1) * 2))
    this._height += num  

    return this
  }

  // Produce some mangoes
  produceApples () {
    
    let apple = new Apple(this.healthStatus,this.fruits)
  }

  // Get some fruits
  harvest () {
    
    var arrStatus = []
    var counterGood = 0
    var counterBad = 0
    for (let i = 0; i < this._fruits; i++) {
      var num = Math.floor(Math.random() * 2)
      if (num == 1) {
        arrStatus.push('good')
        counterGood++ 
      }else{
        arrStatus.push('bad') 
        counterBad++
      }
    }
    
    this._healthStatus = arrStatus
    
    this._harvested = `${this._fruits} (${counterGood} good, ${counterBad} bad)`
  }

}

let appleTree = new AppleTree
// console.log(appleTree);



class Apple extends Mango{
  constructor(){
    super()
  }
}

// Release 2
class FruitTree {

}
class Fruit {}
