const { abs } = require("mathjs");

function f(x){
    return (x*x*x*x)-13;
}

let xl = 1.5
let xr = 2.0
let e = 0.000001
let xm;
function bisection(xl,xr){
    do{
        xm  = (xl+xr)/2.0;
        if(abs(f(xm)) < e){
			break;
		}
        else if(f(xm) * f(xr) < 0){
            xl = xm;
        }
        else{
            xr = xm;
        }

    }while(true);

    return xm;
}
console.log(bisection(xl,xr));
