// What is a callback?
//A callback is a function passed as an argument to another function.
//This technique allows a function to call another function.
//A callback function can run after another function has finished.


function welcome(name,callbackFunction) {
  callbackFunction();
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 1000);
  
  
}
function success() {
  setTimeout(() => {
  console.log("Greetings successful!!");
  }, 2000);
}


welcome("Ram",success);


// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
