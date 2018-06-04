"use strict"

// Release 0

class MangoTree {
  constructor() {

    this.umur = 0
    this.tinggi = 1
    this.fruitCount = [] // total buah
    this.mature = 4;
    this.stopHeight = 15
    this.deadAge = 20
    this.panen = 0;
    let tes = new Mango()
    this.status = true


  }

  get age() {
    return this.umur
  }

  get height() {
    return this.tinggi.toFixed(1) + ' m'

  }

  get fruits() {
    return this.fruitCount
  }

  get healthStatus() {
    return this.status
  }

  get harvested() {

    return this.fruitCount

  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this.umur < this.deadAge) {
      this.umur += 1

    }

    if (this.umur < this.stopHeight)
      this.tinggi += Math.random() * 0.3

    if (this.umur === this.stopHeight) {
      this.status = false
    }


    //     menambah umur pohon dalam format tahun
    // menambah tinggi pohon (pertambahan tinggi random)
    // tentukan mature age, pohon hanya dapat berbuah ketika sudah mencapai mature age tsb.
    // tentukan umur dimana pada umur tsb pohon akan berhenti bertambah tinggi.
    // tentukan umur dimana pada umur tsb pohonnya mati dan tidak dapat berbuah lagi.



  }

  // Produce some mangoes
  produceMangoes() {
    let ran = Math.floor(Math.random() * 40)
    let total = ran
    if (this.umur >= this.mature && this.umur < this.deadAge) {

      for (let i = 0; i < total; i++) {

        this.fruitCount.push(new Mango())
      }




    }




  }

  // Get some fruits
  harvest() {
    this.panen = this.fruitCount.length
    this.bad = 0;
    this.good = 0
    for (let i = 0; i < this.fruitCount.length; i++) {
      if (this.fruitCount[i].quality === 'bad') {
        this.bad++
      } else {
        this.good++
      }

    }

    this.fruitCount = []
  }


}

class Mango {
  //
  // Produce a mango
  constructor(quality) {
    let statues = ['good', 'bad']
    this.quality = statues[Math.floor(Math.random() * 2)]

  }
}

//
let mangoTree = new MangoTree()
console.log('The MANGO tree is alive! :smile:')
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.panen} ( ${mangoTree.bad} bad , ${mangoTree.good} good)`)
} while (mangoTree.healthStatus != false)
console.log('The MANGO tree has met its end. :sad:')






// -------------  Release 1 APPLE TREE

class AppleTree {
  constructor() {

    this.umur = 0
    this.tinggi = 1
    this.fruitCount = []
    this.mature = 7;
    this.stopHeight = 26
    this.deadAge = 28
    this.panen = 0;
    let tes = new Apple()
    this.status = true


  }

  get age() {
    return this.umur
  }

  get height() {
    return this.tinggi.toFixed(1) + ' m'

  }

  get fruits() {
    return this.fruitCount
  }

  get healthStatus() {
    return this.status
  }

  get harvested() {

    return this.fruitCount

  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this.umur < this.deadAge) {
      this.umur += 1

    }

    if (this.umur < this.stopHeight)
      this.tinggi += Math.random() * 0.5

    if (this.umur === this.stopHeight) {
      this.status = false
    }

  }

  // Produce some Applees
  produceApplees() {
    let ran = Math.floor(Math.random() * 90)
    let total = ran
    if (this.umur >= this.mature && this.umur < this.deadAge) {
      for (let i = 0; i < total; i++) {
        this.fruitCount.push(new Apple())
      }
    }
  }

  // Get some fruits
  harvest() {
    this.panen = this.fruitCount.length
    this.bad = 0;
    this.good = 0
    for (let i = 0; i < this.fruitCount.length; i++) {
      if (this.fruitCount[i].quality === 'bad') {
        this.bad++
      } else {
        this.good++
      }
    }
    this.fruitCount = []
  }
}

class Apple {
  constructor(quality) {
    let statues = ['good', 'bad']
    this.quality = statues[Math.floor(Math.random() * 2)]
  }
}

//
let PohonApel = new AppleTree()
console.log('---------------\n')
console.log('\n The APPLE tree is alive! :smile:')
do {
  PohonApel.grow();
  PohonApel.produceApplees();
  PohonApel.harvest();
  console.log(`[Year ${PohonApel.age} Report] Height = ${PohonApel.height} | Fruits harvested = ${PohonApel.panen} ( ${PohonApel.bad} bad , ${PohonApel.good} good)`)
} while (PohonApel.healthStatus != false)
console.log('The APPLE tree has met its end. :sad:')



// Release 2
class FruitTree {}
class Fruit {}
