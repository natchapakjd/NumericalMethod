let fn = x => Math.pow(x,2)-7;
let fn1 = x => 2*x;
let newtonRaphson = x => -fn(x)/fn1(x);

var x0 = 2;
while(true){
    var dx1 = newtonRaphson(x0);
    var x1 = x0+dx1;//x0-fn(x)/fn1(x)
    var error = Math.abs(dx1/x1)*100;
    if(error < 0.000001){
        console.log(x1);
        break;
    }
    x0 = x1;
}