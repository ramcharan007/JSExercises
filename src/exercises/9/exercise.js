// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  console.log(`Given input array is ${inputArray}`);
  inputArray.forEach(func)
  function func(value,index,array){
    array[index]=value*2;
  }
  console.log(inputArray);
}

multiplyArrayByTwo([1,2,3,4]);
