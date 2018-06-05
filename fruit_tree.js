'use strict'

class FruitTree{
    constructor(matureAge, dead, maxHigh, total_fruits){
        this._age = 0
        this._height = 0
        this._fruits = []
        this._harvested = 0
        this._healthStatus = true
        this.countbad = 0
        this.countgood = 0
        this.total_fruits = 0
        this.matureAge = matureAge
        this.dead = dead
        this.maxHigh = maxHigh
    }

    get age () {
        return this._age
      }
    
      get height () {
        return this._height
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
    
      grow () {
      
          let random = Math.random()
          if(this._age <= this.dead){
              this._age++
              if(this._height < this.maxHigh){
                  let growing = this._height + random
                  this._height = +growing.toFixed(2)
                }
                
            }else{
                this._healthStatus = false
            } 
            return this
        }
        
        // Produce some mangoes
        produceFruit () {
            
            if(this._age > this.matureAge){
                this.total_fruits = Math.floor(Math.random()*12)
            }
            // console.log(this.total_fruits);
            
            while(this.total_fruits > 0){
                let quality = new Fruit()
                this._fruits.push(quality)
                this.total_fruits--
            }    
            // console.log(this._fruits);
            
             
      }
    
      // Get some fruits
      harvest () {
        for(var i = 0; i < this._fruits.length;i++){
            if(this.fruits[i].quality === 'good'){
                this.countgood++
            }else if(this.fruits[i].quality === 'bad'){
                this.countbad++
            }
        }
        this._harvested = `${this._fruits.length} (${this.countgood} good, ${this.countbad} bad)`
        this.countbad = 0
        this.countgood = 0
        this._fruits = []
      }
    
}

class Fruit {
  constructor () {
    this.quality = this.setQuality()
  }

  setQuality(){
    let values = ['good','bad']
    var quality = ''
    return quality = values[Math.floor(Math.random()*2)]
  }
}



// let appleTree = new AppleTree(1,5,5)
 
//  do {
//     appleTree.grow();
//     appleTree.produceApple();
//     appleTree.harvest();
//    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//  } while (appleTree.healthStatus != false)



module.exports = {
    fruit : Fruit,
    tree : FruitTree
}



