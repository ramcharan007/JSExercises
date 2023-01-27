// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.
// I have used isArray() method to check whether the input is array or notcd
function checkIfArray(input) {
  let isInputAnArray = false;
  if(Array.isArray(input)){
    isInputAnArray = true;
  }

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
checkIfArray([1,2,3]);