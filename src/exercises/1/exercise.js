// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.
/**Here the reason for failure is that we have declared variable number using 'const',
 * but it is changing with each iteration.So we should declare it using 'let' **/
function printOneToTen() {
  for (let number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}


