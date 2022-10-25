let fn = x => Math.pow(x,2)-7;
function secant(x0,x1){
    return x1-((fn(x1)*(x0-x1))/(fn(x0)-fn(x1)));
}

var x0 = 0;
var x1 = 2;
while(true){
    var x2 = secant(x0,x1);
    var error = Math.abs((x2-x1)/x2)*100;
    if(error < 0.000001){
        console.log(x2);
        break;
    }
    x0 = x1;
    x1 = x2;
}