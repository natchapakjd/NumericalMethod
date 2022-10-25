function fn(x){
    return (1+2*x)/4;
}

function opim(){
    let x0 = 0.00;
    while(true){
       let x1 = fn(x0);
        let err = Math.abs((x1-x0)/x1);
        if(err<0.000001){
            console.log(x1);
            break;
        }
        x0 = x1;
    }
}

opim();