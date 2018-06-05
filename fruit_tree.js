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
    // jika umur si buah masih di bawah umur maximum(dead) umurnya tambah terus
    if (this._age < this.maxAge) {
      this._age++
      var randomHeight = Math.random()
      this._height += +randomHeight // untuk akumulasi pertambahan tiap tahun
    } else {
      this._healthStatus = false // buat nge stopin pertambahan umur
    }
  }

  // Produce some mangoes
  produceMangoes () {
    // kasih kondisi kapan harus produksi mangga nya
    if (this._age >= this.mature && this.age < this.maxAge && this.healthStatus === true) {
      var fruitsTotal = Math.floor(Math.random()*10) // total buah nya random
    }
    // ini looping buat ngasih tau mangga nya bad/good sebanyak fruitsJumlah (krn gatau kapan ngasilin nya makanya random)
    for (let i = 0; i < fruitsTotal; i++) {
      let fruit = new Fruit()
      this._fruits.push(fruit) // bikin array of object good n bad nya
    } 
  }

  // Get some fruits
  harvest () {
    // looping untuk dapetin jumlah yg good n bad
    for (let i = 0; this._fruits.length; i++) {
      let fruit = this._fruits[i]
      // jika di dalam array of object si this._fruits[i].qualityChance ketemu good maka countGood +1
      if (fruit.quality === 'good') { 
        this.countGood++
      } else if (fruit.quality=== 'bad') {
        this.countBad++
      }
      this._fruits = [] // buat nge reset jumlah fruit nya
    }  
    this._harvested = `${this.countBad + this.countGood} (${this.countGood} Good, ${this.countBad} Bad)`
  }

}

class Fruit {
  // Produce a mango CUMA 1 buah
  constructor () {
    this.quality = this.qualityCheck()
  } 

  qualityCheck() {
    // buat nentuin si 1 buah itu good or bad
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
