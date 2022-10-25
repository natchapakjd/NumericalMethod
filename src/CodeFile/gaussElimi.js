let N = 3;

gaussElimi = mat =>{
    let singular_flag = forwardElim(mat);
    if (singular_flag != -1){
        console.log("Singular Matrix.");
        if (mat[singular_flag][N])
            console.log("Inconsistent System.");
        else
            console.log("May have infinitely many solutions.");
        return;
    }
    backSub(mat);
}

swap_row = (mat, i, j) =>{
    for (var k=0; k<=N; k++){
        let temp = mat[i][k];
        mat[i][k] = mat[j][k];
        mat[j][k] = temp;
    }
}

forwardElim = mat => {
    for (var k=0; k<N; k++){
        var iMax = k;
        var vMax = mat[iMax][k];
        for (var i = k+1; i < N; i++)
            if (Math.abs(mat[i][k]) > vMax)
                vMax = mat[i][k], iMax = i;
        if (!mat[k][iMax])
            return k;
        if (iMax != k)
            swap_row(mat, k, iMax);
        for (var i=k+1; i<N; i++){
            let f = mat[i][k]/mat[k][k];
            for (var j=k+1; j<=N; j++)
                mat[i][j] -= mat[k][j]*f;
            mat[i][k] = 0;
        }
    }
    return -1;
}
 
backSub = mat =>{
    let x = new Array(N);
    for (var i = N-1; i >= 0; i--){
        x[i] = mat[i][N];
        for (var j=i+1; j<N; j++){
            x[i] -= mat[i][j]*x[j];
        }
        x[i] = Math.round(x[i]/mat[i][i]);
    }
    for (var i=0; i<N; i++)
        console.log("x",i,": ",x[i]);
}

let mat =   [[2,3,5,0],
            [3,1,-2,-2],
            [1,3,4,-3]];
gaussElimi(mat);