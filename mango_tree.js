// "use strict"
// --------------------> release 0 and 1 commented BELOW    <-----------------
// ---------> Release 2 is Uncommented <---------------


// // Release 0
// class MangoTree {
//   constructor() {
//
//     this.umur = 0
//     this.tinggi = 1
//     this.fruitCount = [] // total buah
//     this.mature = 4;
//     this.stopHeight = 15
//     this.deadAge = 20
//     this.panen = 0;
//     this.status = true
//
//   }
//   get age() {
//     return this.umur
//   }
//
//   get height() {
//     return this.tinggi.toFixed(1) + ' m'
//   }
//
//   get fruits() {
//     return this.fruitCount
//   }
//
//   get healthStatus() {
//     return this.status
//   }
//
//   get harvested() {
//     return this.fruitCount
//   }
//
//   // Get current states here
//
//   // Grow the tree
//   grow() {
//     if (this.umur < this.deadAge) {
//       this.umur += 1
//
//     }
//
//     if (this.umur < this.stopHeight)
//       this.tinggi += Math.random() * 0.3
//
//     if (this.umur === this.stopHeight) {
//       this.status = false
//     }
//
//   }
//
//   // Produce some mangoes
//   produceMangoes() {
//     let ran = Math.floor(Math.random() * 40)
//     let total = ran
//     if (this.umur >= this.mature && this.umur < this.deadAge) {
//       for (let i = 0; i < total; i++) {
//         this.fruitCount.push(new Mango())
//       }
//     }
//   }
//
//   // Get some fruits
//   harvest() {
//     this.panen = this.fruitCount.length
//     this.bad = 0;
//     this.good = 0
//     for (let i = 0; i < this.fruitCount.length; i++) {
//       if (this.fruitCount[i].quality === 'bad') {
//         this.bad++
//       } else {
//         this.good++
//       }
//
//     }
//
//     this.fruitCount = []
//   }
// }
//
// class Mango {
//   // Produce a mango
//   constructor(quality) {
//     let statues = ['good', 'bad']
//     this.quality = statues[Math.floor(Math.random() * 2)]
//
//   }
// }
//
// //
// let mangoTree = new MangoTree()
// console.log('The MANGO tree is alive! :smile:')
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.panen} ( ${mangoTree.bad} bad , ${mangoTree.good} good)`)
// } while (mangoTree.healthStatus != false)
// console.log('The MANGO tree has met its end. :sad:')
//
//
// // -------------  Release 1 APPLE TREE
//
// class AppleTree {
//   constructor() {
//
//     this.umur = 0
//     this.tinggi = 1
//     this.fruitCount = []
//     this.mature = 7;
//     this.stopHeight = 26
//     this.deadAge = 28
//     this.panen = 0;
//     this.status = true
//
//
//   }
//
//   get age() {
//     return this.umur
//   }
//
//   get height() {
//     return this.tinggi.toFixed(1) + ' m'
//   }
//
//   get fruits() {
//     return this.fruitCount
//   }
//
//   get healthStatus() {
//     return this.status
//   }
//
//   get harvested() {
//     return this.fruitCount
//   }
//
//   grow() {
//     if (this.umur < this.deadAge) {
//       this.umur += 1
//
//     }
//
//     if (this.umur < this.stopHeight)
//       this.tinggi += Math.random() * 0.5
//
//     if (this.umur === this.stopHeight) {
//       this.status = false
//     }
//
//   }
//
//   // Produce some Applees
//   produceApplees() {
//     let ran = Math.floor(Math.random() * 90)
//     let total = ran
//     if (this.umur >= this.mature && this.umur < this.deadAge) {
//       for (let i = 0; i < total; i++) {
//         this.fruitCount.push(new Apple())
//       }
//     }
//   }
//
//   // Get some fruits
//   harvest() {
//     this.panen = this.fruitCount.length
//     this.bad = 0;
//     this.good = 0
//     for (let i = 0; i < this.fruitCount.length; i++) {
//       if (this.fruitCount[i].quality === 'bad') {
//         this.bad++
//       } else {
//         this.good++
//       }
//     }
//     this.fruitCount = []
//   }
// }
//
// class Apple {
//   constructor(quality) {
//     let statues = ['good', 'bad']
//     this.quality = statues[Math.floor(Math.random() * 2)]
//   }
// }
//
// //
// let PohonApel = new AppleTree()
// console.log('---------------\n')
// console.log('\n The APPLE tree is alive! :smile:')
// do {
//   PohonApel.grow();
//   PohonApel.produceApplees();
//   PohonApel.harvest();
//   console.log(`[Year ${PohonApel.age} Report] Height = ${PohonApel.height} | Fruits harvested = ${PohonApel.panen} ( ${PohonApel.bad} bad , ${PohonApel.good} good)`)
// } while (PohonApel.healthStatus != false)
// console.log('The APPLE tree has met its end. :sad:')
//
//




//------------------------->>>   RELEASE 2     <<<------------------------

class FruitTree {
  constructor(mature, deadAge, stopHeight, name) {
    this.name = name
    this.umur = 0
    this.tinggi = 1
    this.fruitCount = [] // total buah
    this.mature = mature
    this.stopHeight = stopHeight
    this.deadAge = deadAge
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
  grow() {
    if (this.umur < this.deadAge) {
      this.umur += 1
    }
    if (this.umur < this.stopHeight)
      this.tinggi += Math.random() * 2
    if (this.umur === this.deadAge) {
      this.status = false
    }
  }
  // Produce some FRUITS
  produce() {
    let ran = Math.floor(Math.random() * 40)
    let total = ran
    if (this.umur >= this.mature && this.umur <= this.deadAge) {
      for (let i = 0; i < total; i++) {
        this.fruitCount.push(new Fruit())
      }
    }
  }

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

class Fruit {
  constructor() {
    let statues = ['good', 'bad']
    this.quality = statues[Math.floor(Math.random() * 2)]
  }
}






// EXTENDS for MANGO TREE class
class MangoTree extends FruitTree {
  constructor(mature, deadAge, stopHeight, name) {
    super(mature, deadAge, stopHeight, name)
  }
}
class Mango extends Fruit {
  constructor() {
    super()
  }
}


// EXTENDS for APPLE TREE class
class AppleTree extends FruitTree {
  constructor(mature, deadAge, stopHeight, name) {
    super(mature, deadAge, stopHeight, name)
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }
}


// EXTENDS for PEAR TREE class
class PearTree extends FruitTree {
  constructor(mature, deadAge, stopHeight, name) {
    super(mature, deadAge, stopHeight, name)
  }
}

class Pear extends Fruit {
  constructor() {
    super()
  }
}



// //mature, deadAge, stopHeight, name)
let mangga = new MangoTree(3, 16, 6, 'Mangga MANA meneh')
let apple = new AppleTree(8, 12, 8, 'Apple manaHijau')
let pear = new PearTree(14, 21, 10, 'PIR Australia')




console.log(`The ${mangga.name} tree is alive! :smile:`)
do {
  mangga.grow();
  mangga.produce();
  mangga.harvest();
  console.log(`[Year ${mangga.age} Report] Height = ${mangga.height} | Fruits harvested = ${mangga.panen} ( ${mangga.bad} bad , ${mangga.good} good)`)
} while (mangga.healthStatus != false)
console.log(`The ${mangga.name} tree has met its end. :sad:\n`)




//--------------------- start for Apple tree --------- //
console.log(`The  ${apple.name} tree is alive! :smile:`)
do {
  apple.grow();
  apple.produce();
  apple.harvest();
  console.log(`[Year ${apple.age} Report] Height = ${apple.height} | Fruits harvested = ${apple.panen} ( ${apple.bad} bad , ${apple.good} good)`)
} while (apple.healthStatus != false)
console.log(`The ${apple.name} tree has met its end. :sad:\n`)




//--------------------- start for PEAR tree --------- //
console.log(`\nThe  ${pear.name} tree is alive! :smile:`)
do {
  pear.grow();
  pear.produce();
  pear.harvest();
  console.log(`[Year ${pear.age} Report] Height = ${pear.height} | Fruits harvested = ${pear.panen} ( ${pear.bad} bad , ${pear.good} good)`)
} while (pear.healthStatus != false)
console.log(`The ${pear.name} tree has met its end. :sad:`)
