
"use strict"

// Release 2
class FruitTree {
  constructor(maxAge, maxHeight, nameOfFruit){
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._maxAge = Math.round(Math.random() * 4) + maxAge;
    this._maxHeight = Math.round(Math.random() * 4) + maxHeight;
    this.nameOfFruit = nameOfFruit
  }


  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this.harvest()
  }

  // Get some fruits
  grow() {
    this._age++;
    this._height = this._height + Math.floor(Math.random()*2) + 1;
    
    if(this._age >= this._maxAge || this._height >= this._maxHeight){
      this._healthyStatus = false;
    }
    
  }

  harvest() {
    let good =0;
    let bad =0;
    for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
      if(this._fruits[indexFruit].fruitQuality === 0){
        good++;
      }else{
        bad++;
      }
    }
    let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
    // this._fruits = [];
    return result;
  }

  produceFruits() {
    let totalFruit = Math.round(Math.random()*8);
    for(let loop = 0; loop<totalFruit; loop++){
      if(this.nameOfFruit === 'Mango'){
        let buah = new Mango;
        this._fruits.push(buah);
      }else if(this.nameOfFruit === 'Apple'){
        let buah = new Apple;
        this._fruits.push(buah);
      }
    }
  }


 
}
class Fruit {
  constructor() {
    this._fruitQuality = Math.round(Math.random());
  }

  get fruitQuality(){
    return this._fruitQuality;
  }
}

// release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super(20, 24, 'Mango');
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

console.log('MANGO TREE');


let mangoTree = new MangoTree()
console.log('The tree is alive! :smile:');
  do {
    mangoTree.grow();
    mangoTree.produceFruits('Mango');
    mangoTree.harverst;
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    debugger;
  } while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');
