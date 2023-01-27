// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    let sum=0;
    function func(value,index,array){
        sum+=value;
        
    }
    inputArray.forEach(func);
    console.log(sum);
}


