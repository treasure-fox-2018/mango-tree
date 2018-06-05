// driver code untuk release 0

let classes = require('./mango_tree');

let MangoTree = classes.MangoTree;

let AppleTree = classes.AppleTree;

let PearTree = classes.PearTree;



let mangoTree = new MangoTree(true)

let appleTree = new AppleTree(true)

let pearTree = new PearTree(true)

var arrayOfObject = [mangoTree, appleTree, pearTree]

for (let i = 0; i < arrayOfObject.length; i++) {
  let currentObject = arrayOfObject[i];
  console.log("Let's Go " + currentObject.name + "!");
  do {
    // mangoTree.grow();

    if (currentObject.grow() !== false) {
      currentObject.harvest();
      console.log(`[Year ${currentObject.age} Report] Height = ${currentObject.height} m | Fruits harvested = ${currentObject.harvested} (${currentObject.good} good, ${currentObject.bad}, bad)`);
    } else {
      console.log("RIP TREE");
    }
  } while (currentObject.healthStatus != false)
  console.log("\n");
}
