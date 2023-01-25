// - Explain currying.
// - Convert the below function to curry function

function calculateVolume(length) {
  return function(breadth){
    return function(height){
      return length*breadth*height;
    }
  
  } 
}
console.log(calculateVolume(2)(3)(9));
