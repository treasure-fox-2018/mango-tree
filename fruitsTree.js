// Release 2

// this._deathAge = 20
// this._notGrowAge = 12

// console.log(newClass)
class FruitTree {
    constructor () {
      this._age = 0
      this._deathAge = 20
      this._notGrowAge = 12
      this._matureAge = 3
      this._height = 0
      this._fruits = []
      this._harvested = 0
      this._healthStatus = true
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
      let deathAge = this._deathAge
      let notGrowAge = this._notGrowAge
      this._age += 1
      if (this._age >= notGrowAge && this._age < deathAge ) {
        // pohon tidak bertambah tingginya
        this._age = this._age
      } else if (this._age === deathAge) {
        //pohon mati
        this._healthStatus = false
      } else {
        this._height += randomHeight
        this._height = Number(this._height.toFixed(1))
      }
      return this
    }

    // Produce some mangoes
    produceFruits() {
      this._fruits = []
      let matureAge = this._matureAge
      var randomHarvest = Math.ceil(Math.random() * 12) // random harvested
      // console.log(randomHarvest)
      if (this._age >= matureAge) {
        for(let i = 0; i < randomHarvest; i++) {
          var fruits = new Fruit()
          this._fruits.push(fruits)
        }
      }
      this._harvested = this._fruits.length
    }

    // Get some fruits
    harvest() {
      var countGood = 0
      var countBad = 0
      var prodfruits = this._fruits
      for (let i = 0 ; i < prodfruits.length; i++) {
        if (prodfruits[i].quality === 'good') {
          countGood++
        } else {
          countBad++
        }
      }
      return `(${countGood} good, ${countBad} bad)`
    }
  }

class Fruit {
  constructor () {
    this.quality = this.harvestFruits()
  }

  harvestFruits() {
    let qual = ['bad', 'good']
    var randomIdx = Math.floor(Math.random() * 2)
    return qual[randomIdx]
  }
}

// let fruitTree = new FruitTree()
// let fruits = new Fruit()

// if (fruitTree.healthStatus === true) {
//   console.log('The tree is alive ! :smile:')
// }
// do {
//   fruitTree.grow();
//   fruitTree.produceFruits();
//   fruitTree.harvest();
//   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvested} ${fruitTree.harvest()}`)
//   if (fruitTree.healthStatus === false) {
//     console.log('The tree is die ! :sad:')
//   }
// } while (fruitTree.healthStatus !== false)

module.exports = {
  FruitTree: FruitTree,
  Fruits: Fruit
}