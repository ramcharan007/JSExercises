// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  if (number != 0) {
    let result = 10 / number;
  } else {
    let result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}
