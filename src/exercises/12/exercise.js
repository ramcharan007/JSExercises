// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw "This is a random error";
}

function errorCaller() {
  try{
  errorFunction();
  }
  catch(error){
    console.log(`Error handled`);
  }
}
errorCaller()