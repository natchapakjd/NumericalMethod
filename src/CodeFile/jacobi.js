fx1 = x2 =>{
    return (12-(2*x2))/5;
}
fx2 = (x1,x3) =>{
    return (17-(2*x1)-(2*x3))/5;
}
fx3 = (x2,x4) =>{
    return (14-(2*x2)-(2*x4))/5;
}
fx4 = x3 =>{
    return (7-(2*x3))/5;
}

jacobi = (x1o,x2o,x3o,x4o) =>{
    i = 0;
    while(true){
        i++;
        x1 = fx1(x2o);
        x2 = fx2(x1o,x3o);
        x3 = fx3(x2o,x4o);
        x4 = fx4(x3o);
        x1er = Math.abs((x1-x1o)/x1);
        x2er = Math.abs((x2-x2o)/x2);
        x3er = Math.abs((x3-x3o)/x3);
        x4er = Math.abs((x4-x4o)/x4);
        if(x1er>0.00001 && x2er>0.00001 && x3er>0.00001 && x4er>0.00001){
            x1o = x1;
            x2o = x2;
            x3o = x3;
            x4o = x4;
        }
        else{
            break;
        }
    }
    console.log("X1 : "+x1+" X2 : "+x2+" X3 : "+x3+" X4 : "+x4)
}

x1 = 0;
x2 = 0;
x3 = 0;
x4 = 0;
jacobi(x1,x2,x3,x4);