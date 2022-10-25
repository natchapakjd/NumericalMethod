let M = 10;
 

function PrintMatrix(a,n)
{
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j <= n; j++)
            console.log(a[i][j] + " ");
            
    }
}
 

function PerformOperation(a,n)
{
    let i, j, k = 0, c, flag = 0, m = 0;
    let pro = 0;
    
    for (i = 0; i < n; i++)
    {
        if (a[i][i] == 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] == 0)
                c++;        
            if ((i + c) == n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }
   
        for (j = 0; j < n; j++)
        {
               
            
            if (i != j)
            {
                   
                let p = a[j][i] / a[i][i];
   
                for (k = 0; k <= n; k++)                
                    a[j][k] = a[j][k] - (a[i][k]) * p;            
            }
        }
    }
    return flag;
}
 

function PrintResult(a,n,flag)
{
    console.log("Result is : ");
   
    if (flag == 2)    
        console.log("Infinite Solutions Exists");
    else if (flag == 3)    
        console.log("No Solution Exists");
       
       
    
    else {
        for (let i = 0; i < n; i++)    
        console.log((a[i][n] / a[i][i]) +" ");    
    }
}
 

function CheckConsistency(a,n,flag)
{
    let i, j;
    let sum;
       
    
    flag = 3;
    for (i = 0; i < n; i++)
    {
        sum = 0;
        for (j = 0; j < n; j++)    
            sum = sum + a[i][j];
        if (sum == a[i][j])
            flag = 2;    
    }
    return flag;
}
 

let a=[[ -2, 3, 1, 9  ],
       [ 3, 4, -5, 0  ],
       [ 1, -2, 1, -4 ]];


let n = 3, flag = 0;
 

flag = PerformOperation(a, n);
 
if (flag == 1)    
    flag = CheckConsistency(a, n, flag);
 

PrintResult(a, n, flag);
 