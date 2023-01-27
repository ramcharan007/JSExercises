// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.
/**The Sources panel provides the ability to watch variables within your application. 
 * This is located in the watch section of the debugger sidebar. 
 * By taking advantage of this functionality we will not need repeatedly log objects to the console. */
function randomCalculator() {
  let x = 10,
    y = 0;
  x = x * 10 + 1 - (2 / 2) * 3;
  debugger;
  y = x - 1 + 3 * 10 - 2;
  debugger;
  x = x * 2 - (1 / 3) * 3;
  debugger;
  x = x + 10 - 2 - 3 * 2;
  debugger;
  console.log(x);
}
