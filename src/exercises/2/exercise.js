// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  let result;
  if (number != 0) {
   result = 10 / number;
  } else {
   result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}
console.log(divideTenByNumber(2))