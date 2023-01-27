// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.
/**Here variable result must be declared outside the if-else block.If we define the variable inside an if statement, 
 * then it'll only be visible inside the scope of the if-else block*/
function divideTenByNumber(number) {
  let result;
  if (number != 0) {
   result = 10 / number;
  } else {
   result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}
divideTenByNumber(2)