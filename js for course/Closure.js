function Multiply(multiplier)
{
    function b(){
        console.log("Multiplier is: "+multiplier);
    };
    b();
    return(function(x){
        return x*multiplier;
    });
}
var doubleAll= Multiply(2);
console.log(doubleAll(10));
