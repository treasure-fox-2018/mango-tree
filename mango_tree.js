"use strict"

// Release 2
class FruitTree {
  constructor(){
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._matureAge = 8
    this._maxHeightAge = 15
    this._deadAge = 20
    this._harvest= false
    this._harvested = ''
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

  get harvested(){
    return this._harvested
  }

  // Get current states here

  
  // Grow the tree
  grow () {
    this._age++

    var num = Math.floor(Math.random() * 9) + 1


    if (this._age == this._matureAge) {
      this._harvest = true
    }

    if (this._age == this._deadAge) {
      this._healthStatus = false
    }

    if (this._age <= this._maxHeightAge) {
      this._height += num
    } 

  }

  // Produce some fruits
  produceFruits () {

    if (this._harvest == true) {
      var random = Math.floor(Math.random() * 9) + 1

      for (let i = 0; i < random; i++) {
        var fruit = new Fruit()
        this._fruits.push(fruit)
      }
    }
  }


  // Get some fruits
  harvest () {
    
    var objStatus = {}
    objStatus.good = 0
    objStatus.bad = 0
    objStatus.total = 0

    for (let i = 0; i < this._fruits.length; i++) {
      var quality = this._fruits[i].quality
      
      if (quality == 'good') {
        objStatus.good++
      }else if(quality == 'bad'){
        objStatus.bad++
      }
      objStatus.total++
    }

    

    this._harvested = `${objStatus.total} (${objStatus.good} good, ${objStatus.bad} bad)`
    // console.log(this._fruits);
    this._fruits = []
    
  }

}

class Fruit {

  constructor(){
    this._quality = this.statusQuality()
  }  

  get quality(){
    return this._quality
  }

  statusQuality(){
    var num = Math.floor(Math.random() * 2)
    var quality = ['good','bad'] 
    return quality[num]
  }
  
}
// Release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor () {
    super()
    this._matureAge = 8
    this._maxHeightAge = 12
    this._deadAge = 20
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

  get harvested(){
    return this._harvested
  }

  
  // Get current states here

  
  // Grow the tree
  // grow () {
    
  // }

  // Produce some mangoes
  produceMangoes () {
      if (this._harvest == true) {
        var random = Math.floor(Math.random() * 9) + 1
       
        for (let i = 0; i < random; i++) {
          var mango = new Mango()
          this._fruits.push(mango)
        }
      }
      
  }

  // Get some fruits
  // harvest () {

  // }

}

class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super()
  }

  get quality(){
    return this._quality
  }
}


  
// Release 1
class AppleTree extends FruitTree{  
  constructor(){
    super()
    this._matureAge = 5
    this._maxHeightAge = 10
    this._deadAge = 15
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

  get harvested(){
    return this._harvested
  }

  // Get current states here

  
  // Grow the tree
  // grow () {
    
  // }

  // Produce some mangoes
  produceApples () {
    if (this._harvest == true) {
      var random = Math.floor(Math.random() * 9) + 1

      for (let i = 0; i < random; i++) {
        var apple = new Apple()
        this._fruits.push(apple)
      }
    }
  }

  // Get some fruits
  // harvest () {
  // }
}

class Apple extends Fruit{
  constructor(){
    super()
  }

  get quality(){
    return this._quality
  }
}



////////////////////////////////////////////////////
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
 console.log('The tree is alive :smile:');
  do {    
    mangoTree.grow();
    mangoTree.produceMangoes();    
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  console.log('The tree has met its end. :sad:');