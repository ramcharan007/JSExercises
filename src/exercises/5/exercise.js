// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue;
  decimalValue=parseInt(binaryString,2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
binaryToDecimal('101')