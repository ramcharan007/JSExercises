// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.
// Because JavaScript functions are executed in the sequence they are called.
// - Explain in your own terms what are event loops?
// An event loop is something that pulls stuff out of the queue and 
// places it onto the function execution stack whenever the function stack becomes empty.

function learnEventLoops() {
  console.log("Learning event loops");
  setTimeout(function print() {
    console.log("50% Learning done!");
  }, 0); // 0 millisec
  setTimeout(function print() {
    console.log("75% Learning done!");
  }, 1); // 1 millisec
  console.log("Learning completed!!");
}
learnEventLoops();
