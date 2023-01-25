// Read what is a closure and give an example here
function closureExample()
{
    var b = 0;
    function inner(){
        return b+=1;
    }
    return inner;
}
var getInner = closureExample();  
  
console.log(getInner());
console.log(getInner());
console.log(getInner());
