"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = new Mango;
    this._maxProduce = 8;
    this._healtyStatus = true;
    this._matureAge = 5;
    this._maxAge = 10;
    this._probabilityHeightGrow = 5;
    this._harsvested = {};
  }


  get age() {
    return this._age + ' tahun';
  }

  get height() {
    return this._height + ' m';

  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healtyStatus;
  }

  get harvested() {
        
    let good = this._harsvested.good || 0;
    let bad =  this._harsvested.bad || 0;

    return `${good + bad} (${good} good, ${bad} bad)`  
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    
    //stop to height gain
    if(this._age < this._maxAge){
      this._height += Math.round(Math.random()*2)
    }
   
   
    if(this._age >= this._maxAge){
      this._healtyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for(let a = 0; a < this._maxProduce; a++){
      for(var condition in this._fruits){
        if(condition === this._fruits.quality() ){
            this.fruits[condition]++;
        }
      }
    } 
  }

  // Get some fruits
  harvest() {
    this._harsvested = {...this._fruits};
    this._fruits = new Mango;
  }
}

class Mango {
  // Produce a mango
  constructor() {
       this.good = 0;
       this.bad = 0;
      }

     quality(){
        var condition = ["good", "bad"];
        var random = Math.floor(Math.random() * condition.length);
        return condition[random];
       }
}


//  * driver code untuk release 0ls
   let mangoTree = new MangoTree()
   console.log('The Tree Is Alive! :smile:')
   do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
    mangoTree.harvest();
  } while (mangoTree._healtyStatus !=  false)
  console.log('The Tree Has Met Its End :sad:')

  

// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {
  // Produce a fruit
//   constructor() {
    
//   }

// }








