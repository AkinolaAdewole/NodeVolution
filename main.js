// Remember, the syntax exports default { add, subtract }; looks like ES6 module syntax, which is different from CommonJS. 
// If you want to use ES6 module syntax in Node.js, you need to have your file extension as .mjs, 
// and you also need to use the import and export statements instead of require and module.exports.

const {add,subtract}= require('./example/math.js');
const path = require("node:path");
const EventEmitter= require('node:events');

const emitter= new EventEmitter();

// Register an event listener for the 'order pizza' event
emitter.on('order pizza', (size,topping) => {
    console.log(`Order received, baking a ${size} pizza with ${topping}`);
  });
  
  // Emit the 'order pizza' event
  emitter.emit('order pizza','large', 'mushroom');



  const pizzaShop =require('./example/pizzaShop.js');
  const DrinkMachine=require('./example/drinkMachine.js');


  const PizzaShop=new pizzaShop();
  const drinkMachine= new DrinkMachine();
  
  PizzaShop.on('order', (size, topping)=>{
    console.log(`We will deliver the ${size} of pizza with ${topping}`);
  })
  PizzaShop.order();
  PizzaShop.displayOrderNumber();


// console.log(add(2,3));
// console.log(subtract(5,4));

// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));

// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute(__filename));