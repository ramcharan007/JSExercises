// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?
// setInterval
function Timer(){
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML='00:'+sec;
        sec++;
        if (sec > 60) {
            clearInterval(timer);
        }
    }, 1000);
}