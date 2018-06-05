'use strict'

const classArray = require("./mango_tree.js");
let mangoTree = new classArray[2]()
let appleTree = new classArray[4]()
let pearTree = new classArray[6]()


let fruitArr = [mangoTree, appleTree, pearTree];
let fruitName = ['mango', 'apple', 'pear'];

for (var i = 0; i < fruitArr.length; i++) {

  console.log(`The ${fruitName[i]} tree is alive!`);


  do{
    fruitArr[i].grow();
    fruitArr[i].produceFruits();
    fruitArr[i].harvest();
    console.log(`[Year ${fruitArr[i].age} Report] Height = ${fruitArr[i].height.toFixed(1)} | ${fruitName[i]}s harvested = ${fruitArr[i].harvested}`)
  } while (fruitArr[i].healthStatus == 'healthy');

  console.log(`The ${fruitName[i]} tree has demised`);
  console.log(`Total ${fruitName[i]}s produced in it's lifetime = ${fruitArr[i].totalFruitsProduced}\nTotal good ${fruitName[i]}s produced = ${fruitArr[i].totalGoodFruitsProduced}\nTotal bad ${fruitName[i]}s produced = ${fruitArr[i].totalBadFruitsProduced}`);

  console.log('');
  console.log('');
  console.log('');
}
