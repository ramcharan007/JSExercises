// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// Yes,In line 15
// - What is an IIFE? Have we used one here?
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined,Yes.
// - Discuss about "Revealing Module Pattern" and how we have used it.
// Revealing Module Pattern is JavaScript’s design pattern that is available for users 
// to actually organize JavaScript’s codes in modules which actually gives better code structure 
// and helps in making things either private or public to users.
// We have used it here in to combine increment,decrement,value methods to make counter.
// - What are higher order functions?
// Here the anonymous function in line 15 is a higher order function

const counter = (function () {
  //Your code goes here.
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();
console.log(counter.value()); 
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value()); 
