"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age = 0, height = 0) {
    this._age = 0;
    this._height = 0;
    this._objFruits = {};
    this._healthStatus = true;
    this._goodCount = 0;
    this._badCount = 0;
    this._stopGrowing = 17;
    this._deadAge = 20;
    this._matureAge = 3;
    this._totalProduce = 0;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._totalFruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return `${this._totalProduce} (${this._goodCount} good, ${this._badCount} bad)`
     
  }

  // Get current states here

  // Grow the tree
  grow () {

    //1,
    this._age++;

    //3.
    if (this._age > this._matureAge) {
      this._totalProduce = Math.floor(Math.random()*20);
    }
    else {
      this._totalProduce = 0;
    }

    //4.
    if (this._age < this._stopGrowing) {
      //2.
      this._height = this._height + (Math.floor(Math.random()*10))/10;
    }

    //5.
    if (this._age >= this._deadAge) {
      this._healthStatus = false;
    }
    return this
  }

  // Produce some mangoes
  produceMangoes () {
    var fruitResult = [];
    if (this._totalProduce > 0) {
      for (var i = 0; i <= this._totalProduce - 1; i++) {
        var fruit = new Mango ();
        fruitResult.push(fruit.quality);
      }
      this._objFruits = {
        fruitsLength : fruitResult.length,
        fruitsArr : fruitResult
        
      }
      // console.log(this._objFruits)
      return this._objFruits
      
    }
    
  }

  // Get some fruits
  harvest () {
    // var fruitArr = this._objFruits.fruitsArr;
    this._goodCount = 0;
    this._badCount = 0;
    for (var i = 0; i <= this._objFruits.fruitsLength - 1; i++) {
      if (this._objFruits.fruitsArr[i] === 'Good') {
        this._goodCount++;
      }
      else {
        this._badCount++;
      }
    }
    
    return this
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.qualityCreate();
  }

  qualityCreate () {
    var qualityArr = ['Good', 'Bad'];
    return qualityArr[Math.floor(Math.random()* qualityArr.length)]
  }
}

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




// Release 1
class AppleTree extends MangoTree {
  constructor () {
    super();
    this._stopGrowing = 13;
    this._deadAge = 24;
    this._matureAge = 5;
  }

  produceMangoes () {
    var fruitResult = [];
    if (this._totalProduce > 0) {
      for (var i = 0; i <= this._totalProduce - 1; i++) {
        var fruit = new Apple ();
        fruitResult.push(fruit.quality);
      }
      this._objFruits = {
        fruitsLength : fruitResult.length,
        fruitsArr : fruitResult
        
      }
      return this._objFruits
    }
    
  }
}

class Apple extends Mango{
  constructor () {
    super();
  }
}

// Release 2
class FruitTree {}
class Fruit {}



let mangoTree = new AppleTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
}
while (mangoTree.healthStatus != false)