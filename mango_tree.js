"use strict"

// console.log semua di release 2, kalau cek satu" silahkan un-comment - comment, thanks

// Release 0

// class MangoTree {
//   constructor () {
//     this._age = 0
//     this._height = 0
//     this._fruits = 0
//     this._harvest = null
//     this._healthStatus = true
//   }

//   get age () {
//     return this._age
//   }

//   get height () {
//     let tree = `${this._height/100} m`;
//     return tree;
//   }

//   get fruits () {
//     return this._fruits
//   }

//   get healthStatus () {
//     return this._healthStatus
//   }

//   get harvested () {
//     let bad = 0
//     let good = 0
//     for (var i = 0; i < this._harvest.length; i++) {
//       if (this._harvest[i].status) {
//         good++
//       } else {
//         bad++
//       }
//     }
//     return `${this._fruits} (${good} good, ${bad} bad)`;
//   }

//   // Grow the tree
//   grow () {
//     this._age += 1
//     this._matureAge = 2
//     this._maxAge = 10
//     if(this._age > this._maxAge){
//       this._healthStatus = false
//       console.log('The tree has met its end. :sad:')
//     }else{
//       let growing = Math.floor(Math.random()*200)
//       this._height = growing
//     }
//   }

//   // Produce some mangoes
//   produceMangoes () {
//     if(this._age >= this._matureAge){
//       let produce = Math.floor(Math.random() * 200)
//       this._fruits = produce
//     }
//   }

//   // Get some fruits
//   harvest () {
//     var harvested = []
//     for(let i=0; i<this._fruits; i++){
//       let mango = new Mango
//       harvested.push(mango)
//     }
//     this._harvest = harvested
//   }

// }

// class Mango {
//   constructor(status) {
//       this.status = this.getQuality()
//     }
//     getQuality() {
//       var quality = Math.floor(Math.random() * 2)
//       if (quality === 0) {
//         return true
//       } 
//       else {
//         return false
//       }
//     }
// }

// console.log("===========================MANGO==========================")s
// console.log("The tree is alive! :smile:")
// let mangoTree = new MangoTree()
//   do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthStatus != false)
 

// Release 1
// class AppleTree extends MangoTree{
//   constructor(){
//     super()
//   }
  // get age () {
  //   return this._age
  // }

  // get height () {
  //   let tree = `${this._height/100} m`;
  //   return tree;
  // }

  // get fruits () {
  //   return this._fruits
  // }

  // get healthStatus () {
  //   return this._healthStatus
  // }

  // get harvested () {
  //   let bad = 0
  //   let good = 0
  //   for (var i = 0; i < this._harvest.length; i++) {
  //     if (this._harvest[i].status) {
  //       good++
  //     } else {
  //       bad++
  //     }
  //   }
  //   return `${this._fruits} (${good} good, ${bad} bad)`;
  // }

  // Grow the tree
  // grow () {
  //   this._age += 1
  //   this._matureAge = 1
  //   this._maxAge = 15
  //   if(this._age > this._maxAge){
  //     this._healthStatus = false
  //     console.log('The tree has met its end. :sad:')
  //   }else{
  //     let growing = Math.floor(Math.random()*200)
  //     this._height = growing
  //   }
  // }

  // // Produce some Apples
  // produceMangoes () {
  //   if(this._age >= this._matureAge){
  //     let produce = Math.floor(Math.random() * 200)
  //     this._fruits = produce
  //   }
  // }

  // // Get some fruits
  // harvest () {
  //   var harvested = []
  //   for(let i=0; i<this._fruits; i++){
  //     let apple = new Apple
  //     harvested.push(apple)
  //   }
  //   this._harvest = harvested
  // }

// }
// class Apple extends Mango{
//   constructor(){
    // super()
  // }
  // getQuality() {
  //   var quality = Math.floor(Math.random() * 2)
  //   if (quality === 0) {
  //     return true
  //   } 
  //   else {
  //     return false
  //   }
  // }
// }

// console.log("===========================APPLE==========================")

// console.log("The tree is alive! :smile:")
// let appleTree = new AppleTree()
//   do {
//     appleTree.grow();
//     appleTree.produceMangoes();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//   } while (appleTree.healthStatus != false)

// Release 2
class FruitTree {
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvest = null
    this._healthStatus = true
  }

  get age () {
    return this._age
  }

  get height () {
    let tree = `${this._height/100} m`;
    return tree;
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    let bad = 0
    let good = 0
    for (var i = 0; i < this._harvest.length; i++) {
      if (this._harvest[i].status) {
        good++
      } else {
        bad++
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`;
  }

  // Grow the tree
  grow () {
    this._age += 1
    this._matureAge = 2
    this._maxAge = 10
    if(this._age > this._maxAge){
      this._healthStatus = false
    }else{
      let growing = Math.floor(Math.random()*200)
      this._height = growing
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this._matureAge){
      let produce = Math.floor(Math.random() * 200)
      this._fruits = produce
    }
  }

  // Get some fruits
  harvest () {
    var harvested = []
    for(let i=0; i<this._fruits; i++){
      let fruit = new Fruit
      harvested.push(fruit)
    }
    this._harvest = harvested
  }

}

class Fruit {
  constructor(status) {
      this.status = this.getQuality()
    }
    getQuality() {
      var quality = Math.floor(Math.random() * 2)
      if (quality === 0) {
        return true
      } 
      else {
        return false
      }
    }
}

class MangoTree extends FruitTree{
  constructor(){
    super()
  }
}
class mango extends Fruit{
  constructor(){
    super()
  }
}

console.log("===========================MANGO==========================")
console.log("The tree is alive! :smile:")
let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    if(mangoTree.healthStatus === true){
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
    } else {
      console.log('The tree has met its end. :sad:')
    }
  } while (mangoTree.healthStatus != false)

class AppleTree extends FruitTree{
  constructor(){
    super()
  }

  // maxAge ganti jd dimasukin grow()
  grow () {
    this._age += 1
    this._matureAge = 1
    this._maxAge = 15
    if(this._age > this._maxAge){
      this._healthStatus = false
    }else{
      let growing = Math.floor(Math.random()*200)
      this._height = growing
    }
  }
}
class apple extends Fruit{
  constructor(){
    super()
  }
}
  
console.log("===========================APPLE==========================")
console.log("The tree is alive! :smile:")
let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceMangoes();
    appleTree.harvest();
    if(appleTree.healthStatus === true){
      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
    } else {
      console.log('The tree has met its end. :sad:')
    }
  } while (appleTree.healthStatus != false)

class PearTree extends FruitTree{
  constructor(){
    super()
  }

  // // maxAge dan matureAge ganti jd dimasukin
  grow () {
    this._age += 1
    this._matureAge = 3
    this._maxAge = 12
    if(this._age > this._maxAge){
      this._healthStatus = false
    }else{
      let growing = Math.floor(Math.random()*200)
      this._height = growing
    }
  }
}
class pear extends Fruit{
  constructor(){
    super()
  }
}

console.log("===========================PEAR==========================")
console.log("The tree is alive! :smile:")
let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.produceMangoes();
    pearTree.harvest();
    if(pearTree.healthStatus === true){
      console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
    } else {
      console.log('The tree has met its end. :sad:')
    }
  } while (pearTree.healthStatus != false)
