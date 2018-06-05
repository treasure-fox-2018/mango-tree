"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (healthStatus) {
    this._healthStatus = healthStatus;
    this._age = 0;
    this._height = 0;
    this._fruitsAmount = 0;
    this._harvested = 0;
    this._arrOfObj = [];
    this._good = 0;
    this._bad = 0
  }

  get good () {
    return this._good;
  }

  get bad () {
    return this._bad;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitsAmount;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {

    // console.log(this._harvested);
    // console.log(this._arrOfObj);

    this._good = 0;
    this._bad = 0;
    this._harvested = 0;

    let arrOfObjFruitsProduced = this._arrOfObj;
    for (let i = 0; i < arrOfObjFruitsProduced.length; i++) {
      if (arrOfObjFruitsProduced[i].quality === "good") {
        this._good ++;
      } else {
        this._bad ++;
      }
      this._harvested ++;
    }

    this._arrOfObj = [];

    return this._harvested;
  }

  get arrOfObj () {
    return this._arrOfObj;
  }

  // Get current states here

  // Grow the tree
  grow () {
    var matureAge = 3;
    var stopHeightAge = 10;
    var stopFruitAge = 15;

    if (this._age === stopFruitAge - 1) {
      this._healthStatus = false;
      return false;
    } else {
      this._age = this._age + 1;
      if (this._age >= matureAge && this._age !== stopFruitAge) {
        this.produceMangoes ();
      }

      if (this._age <= stopHeightAge ) {
        this._height = this._height + (Math.trunc(Math.random() * 5));
      }
    }



    // return "Tree is still alive";
  }

  // Produce some mangoes
  produceMangoes () {
    let additonalAmount = (Math.trunc(Math.random() * 10));
    let arrOfObjProduced = this._arrOfObj;

    for (let i = 0; i < additonalAmount; i++) {
      let mangoFruit = new Mango();
      arrOfObjProduced.push(mangoFruit)
    }

    this._arrOfObj = arrOfObjProduced;
    this._fruitsAmount += additonalAmount;

    return this;
  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {
    var arrStr = ["good", "bad"];
    this._quality = arrStr[Math.trunc(Math.random() * arrStr.length)];
  }

  get quality () {
    return this._quality;
  }
}

 // driver code untuk release 0
 let mangoTree = new MangoTree(true)

 console.log("Let's Go!");
 do {
   // mangoTree.grow();

   if (mangoTree.grow() !== false) {
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree.good} good, ${mangoTree.bad}, bad)`);
   } else {
     console.log("RIP TREE");
   }
   // console.log(mangoTree.arrOfObj);
 } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
