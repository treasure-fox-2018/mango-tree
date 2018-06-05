//RUN THIS PROGRAM TO EMULATE ALL TREE
//RELEASE 2

let classApple = require('./apple_tree.js')
let classPear = require('./pear_tree.js')
let classMango = require('./mango_tree.js')

let appleTree = new classApple();
let pearTree = new classPear();
let mangoTree = new classMango();

let listFruit = ['appleTree','pearTree', 'mangoTree']

for (let i = 0 ; i < listFruit.length ; i ++) {
  console.log (`Emulator ${listFruit[i]}`)
  do {
    eval(listFruit[i]).grow();
    eval(listFruit[i]).produceFruit();
    eval(listFruit[i]).harvest();
    console.log(`[Year ${ eval(listFruit[i]).age} Report] Height = ${eval(listFruit[i]).height} m | Fruits harvested = ${eval(listFruit[i]).harvested}`)
  } while (eval(listFruit[i]).healthStatus === true)
  console.log("The tree has met its end.")
  console.log("");
}