function func(x){
    return 43*x-1 ;
}

function falsePosition(XL, XR){
    while(true){
        var X1;
        X1 = ((XL*func(XR))-(XR*func(XL)))/(func(XR)-func(XL));
        if(func(X1)*func(XR) < 0){
            XL = X1;
        }
        else if(func(X1)*func(XR) > 0){
            XR = X1;
        }
        if (Math.abs(func(X1))<0.000001){
            break;
        }
    }
    console.log(X1);
}

let XL = 0.02, XR = 0.03;
falsePosition(XL, XR);