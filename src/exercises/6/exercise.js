// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  if(Array.isArray(inputArray)){
    let lengthOfArray;
    lengthOfArray=inputArray.length;
    console.log(`Length of the given input array is ${lengthOfArray}`);
  }
  else{
    console.log(`Invalid Input`);
  }
}
