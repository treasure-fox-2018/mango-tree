"use strict"
/* 
step 
1. inisialisasi age, max age, height, dll. janga lupa kalo ada getter nya this inisilisasi nya pake underscore
2. di method grow () kasih kondisi untuk perhitungan height nya pertahun, dia bakal berhenti jika
  healthStatus nya false which is fruit nya dead 
3. di console log dulu buat liat hasil pertahun plus pertambahan tinggi nya
4. sebelum masuk ke method produceMangoes() dan harvest(). Inisialisasi dulu this.qualituChance = quality() nya di dalam    class Fruit.
5. di method quality yg di dalam class Fruit guna nya untuk me random kualiti fruit nya good atau bad
6. terusk masuk ke method produceMangoes() untuk menghitung total buah yg bad dan random, hasil nya nanti jadi array of     object
7. untuk tau masinng2 jumlah yg bad dan good pake method harvest() pake countBad dan countGood, hbs itu array of object     nya jgn lupa di kosongin buat nge reset. Kalo gak di reset untuk tahun2 berikutnya jumlah buah nya jd di akumulasi
8. tampilin hasilnya di this._harvested
9. console log test driver nya, cara nge consol nya,
  9.a. let fruitTree = new FruitTree()
  9.b. let fruit = new Fruit

step untuk apple, mango, pear
1. pake konsep inheritance
2. contohmisal di apple, bikin class nya -> AppleTree extends FruitTree krn FruitTree class bapaknya
3. di dalam constructor appleTree isi this._age, this._max_age, this._mature_age, dll. apa aja yg buat nge declare           variable baru
4. Next, bikin method Apple extends Fruit untuk ngikutin method random bad/good fruitnya
5. copy paste test driver dari fruit nya 
*/

console.log('===============================FRUIT====================================================')  
// Release 0
class FruitTree {
  // Initialize a new FruitTree
  constructor () {
    this._age = 0
    this.max_age = 15
    this.max_height_age = 10
    this.mature_age = 5
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthStatus = true
    this.countGood = 0
    this.countBad = 0
  }

  // funfact => variable this yg ada getternya di tambah underscore kaya gini this._
  // getter buat this yg private
  get age () { return this._age }
  get height () { return this._height.toFixed(2) }
  get fruits () { return this._fruits }
  get healthStatus () { return this._healthStatus }
  get harvested () { return this._harvested }

  // Grow the tree
  grow () {
    // jika umur si buah masih di bawah umur maximum(dead) umurnya tambah terus
    if (this._age < this.max_age) {
      this._age++
      var random_height = Math.random()
      this._height += +random_height // untuk akumulasi pertambahan tiap tahun
    } else {
      this._healthStatus = false // buat nge stopin pertambahan umur
    }
  }

  // Produce some mangoes
  produceMangoes () {
    // kasih kondisi kapan harus produksi mangga nya
    if (this._age >= this.mature_age && this.age < this.max_age && this.healthStatus === true) {
      var fruitsJumlahthis = Math.floor(Math.random()*10) // total buah nya random
    }
    // ini looping buat ngasih tau mangga nya bad/good sebanyak fruitsJumlah (krn gatau kapan ngasilin nya makanya random)
    for (let i = 0; i < fruitsJumlahthis; i++) {
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
      if (fruit.qualityChance === 'good') { 
        this.countGood++
      } else if (fruit.qualityChance === 'bad') {
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
    this.qualityChance = this.quality()
  } 

  quality() {
    // buat nentuin si 1 buah itu good or bad
    let qualityChance = ['good','bad']
    let qualityCheck = qualityChance[Math.floor(Math.random()*2)]
    return qualityCheck
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


console.log('===============================APPLE====================================================')   
// // Release 1
class AppleTree extends FruitTree {
  constructor() {
    super() 
    this.max_age = 20
    this.max_height_age = 15
    this.mature_age = 10
  }
}
class Apple extends Fruit {
  constructor() {
    super()
  }
}

// * driver code untuk apel
let appleTree = new AppleTree()
let apple = new Apple()

do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)


 console.log('===============================MANGO====================================================')  
// // Release 2
class MangoTree extends FruitTree {
  constructor() {
    super()
    this.max_age = 25
    this.max_height_age = 4
    this.mature_age = 3
  }
}
class Mango extends Fruit {
  constructor() {
    super()
  }
} 

// * driver code untuk Mango
let mangoTree = new MangoTree()
let mango = new Mango()

do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)

 console.log('===============================PEAR====================================================')  
 // // Release 2
 class PearTree extends FruitTree {
   constructor() {
     super()
     this.max_age = 10
     this.max_height_age = 2
     this.mature_age = 6
   }
 }
 class Pear extends Fruit {
   constructor() {
     super()
   }
 } 
 
 // * driver code untuk Pear
 let pearTree = new PearTree()
 let pear = new Pear()
 
 do {
   pearTree.grow();
   pearTree.produceMangoes();
   pearTree.harvest();
   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)