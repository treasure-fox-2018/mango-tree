// driver code untuk release 0

const MangoTree = require('./mango_tree.js');

const AppleTree = require('./apple_tree.js');

const PearTree = require('./pear_tree.js');

let mangoTree = new MangoTree(true)

let appleTree = new AppleTree(true)

let pearTree = new PearTree(true)

var arrayOfObject = [mangoTree, appleTree, pearTree]


for (let i = 0; i < arrayOfObject.length; i++) {
  let currentObject = arrayOfObject[i];
  console.log("Let's Go " + currentObject.name + "!");
  do {
    if (currentObject.grow() !== false) {
      currentObject.harvest();
      console.log(`[Year ${currentObject.age} Report] Height = ${currentObject.height} m | Fruits harvested = ${currentObject.harvested} (${currentObject.good} good, ${currentObject.bad}, bad)`);
    } else {
      console.log("RIP TREE");
    }
  } while (currentObject.healthStatus != false)
  console.log("\n");
}
