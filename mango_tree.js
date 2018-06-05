"use strict"


/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */



// Release 2
class FruitTree {
  constructor (age, height, fruits, healthStatus, harvested,matureAge, stopGrowingAge , dieAge) {
    this._age = age,
    this._height = height,
    this._fruits = fruits,
    this._healthStatus = healthStatus,
    this._harvested = harvested,
    this.matureAge = matureAge,
    this.stopGrowingAge = stopGrowingAge,
    this.dieAge = dieAge
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
    this._age++;

    if (this._age < this.stopGrowingAge) {
      this._height += (Math.floor(Math.random()*10) / 10) ;
      return this._healthStatus = true;
    } 

    if(this._age > this.dieAge){
      return this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceFruit (fruit_type) {
    if(this._age >= this.matureAge){
      let totalFruit = Math.floor(Math.random()*14) + 1

      for(let i = 0; i < totalFruit; i++){
        if(fruit_type === 'Mango'){
          let mango = new Mango()
          this._fruits.push(mango.quality)
        } else if(fruit_type === 'Apple'){
          let apple = new Apple()
          this._fruits.push(apple.quality)
        }

      }

    }
  }

  // Get some fruits
  harvest () {
    this._harvested = ''

    let goodCount = 0
    let badCount = 0

    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i] === 'good'){
        goodCount += 1
      } else if(this._fruits[i] === 'bad'){
        badCount += 1
      }
    }

    this._harvested += `${this._fruits.length} (${goodCount} good, ${badCount} bad)`
    this._fruits = []
  }

}
class Fruit {
  constructor () {
    this.quality = this.randomQuality()
  }

  randomQuality(){
    let quality = ['bad','good']
    let fruitQuality = quality[Math.floor(Math.random()*2)]

    return fruitQuality
  }
}

// Release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor (age=0, height= 0, fruits=[], healthStatus='good', harvested= '', matureAge=3, stopGrowingAge=12 , dieAge= 20) {
    super(stopGrowingAge , dieAge, age, height, fruits, healthStatus, harvested);

  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super()
  }
}


// Release 1
class AppleTree extends FruitTree{
  constructor (age=0, height= 0, fruits=[], healthStatus='good', harvested= '', matureAge=5, stopGrowingAge=10 , dieAge= 35) {
    super(age, height, fruits, healthStatus, harvested, matureAge,stopGrowingAge,dieAge)
  }

}

class Apple extends Fruit{
  constructor () {
    super()
  }

}


 let mangoTree = new MangoTree()

  do {
    mangoTree.grow();
    mangoTree.produceFruit('Mango');
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)

 let appleTree = new AppleTree('Apple')
  do {
    appleTree.grow();
    appleTree.produceFruit(Apple);
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)


