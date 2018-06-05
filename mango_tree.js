// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age, height) {
    this._age = age;
    this._height = height;
    this._fruits = [];
    this._harvested = ['good : ',0,' bad : ',0]
    this._healthStatus = true;
    this._matureAge = 10;
    this._maximumAge = 15;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;

  }

  get fruits () {
    return this._fruits;
  }
  get harvested () {
    return `${this._harvested[0]}${this._harvested[1]} ${this._harvested[2]}${this._harvested[3]}`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age ++;
    if(this._age < this._matureAge){
      this._height += Math.ceil((Math.random() * 3))
    };
    if(this._age === this._maximumAge){
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this._matureAge){
      let random = Math.ceil(Math.random() * 3)
      for(let z = 0; z < random; z ++){
        let status = [true,false];
        let randomStatus = Math.floor(Math.random() * 2);
        this._fruits.push(new Mango(status[randomStatus]));
      }
    }
  }

  // Get some fruits
  harvest () {
    for(let z = 0; z < this._fruits.length; z ++){
      if(this.fruits[z].goodFruit === true){
        this._harvested[1]++;
      }else{
        this._harvested[3]++;
      };
    }
    this._fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor (quality) {
    this.goodFruit = quality;
  }
}

// class AppleTree extends MangoTree{
//   constructor(age,height){
//     super(age,height)
//     this._maximumAge = 20;
//   }
// }


// let appleTree = new AppleTree(3,4)
// console.log(appleTree)
let mangoTree = new MangoTree(0,3);
console.log(`This is the beginning of a Mango Tree :)`)
console.log(' ')
do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree._healthStatus != false)
   console.log(' ')
   console.log(`This tree has meet its end ):`)

// // Release 1
class AppleTree {
  constructor (age, height) {
    this._age = age;
    this._height = height;
    this._fruits = [];
    this._harvested = ['good : ',0,' bad : ',0]
    this._healthStatus = true;
    this._matureAge = 13;
    this._maximumAge = 20;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;

  }

  get fruits () {
    return this._fruits;
  }
  get harvested () {
    return `${this._harvested[0]}${this._harvested[1]} ${this._harvested[2]}${this._harvested[3]}`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age ++;
    if(this._age < this._matureAge){
      this._height += Math.ceil((Math.random() * 3))
    };
    if(this._age === this._maximumAge){
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceApples () {
    if(this._age >= this._matureAge){
      let random = Math.ceil(Math.random() * 3)
      for(let z = 0; z < random; z ++){
        let status = [true,false];
        let randomStatus = Math.floor(Math.random() * 2);
        this._fruits.push(new Apple(status[randomStatus]));
      }
    }
  }

  // Get some fruits
  harvest () {
    for(let z = 0; z < this._fruits.length; z ++){
      if(this.fruits[z].goodFruit === true){
        this._harvested[1]++;
      }else{
        this._harvested[3]++;
      };
    }
    this._fruits = [];
  }

}
class Apple {
  constructor (quality) {
    this.goodFruit = quality;
  }
}

let appleTree = new AppleTree(0,4);
console.log('----------------------------------------')
console.log(`This is the beginning of a Apple Tree :)`)
console.log(' ')
do {
     appleTree.grow();
     appleTree.produceApples();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree._healthStatus != false)
   console.log(' ')
   console.log(`This tree has meet its end ):`)
