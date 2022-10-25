const math = require('mathjs');

function det(Matrix){
    return math.det(Matrix);
}

let A = [
    [-2,3,1],
    [3,4,-5],
    [1,-2,1]
]
let B = [
    [9,0,-4]
]   

let A1 = [
    [9 ,3 ,1],
    [0,4,-5],
    [-4,-2,1]
]
let A2 = [
    [-2,9,1],
    [3,0,-5],
    [1,-4,1]
]
let A3 = [
    [-2,3,9],
    [3,4,0],
    [1,-2,-4]
]

let detA = det(A);
let detA1 = det(A1);
let detA2 = det(A2);
let detA3 = det(A3);
console.log("detA1 = %d",detA1);
console.log("detA2 = %d",detA2);
console.log("detA3 = %d",detA3);

let x1 = detA1 / detA ;
let x2 = detA2 / detA ;
let x3 = detA3 / detA ;

if((x1*-2 + x2*3 + 1*x3 == 9) && (x1*3 + x2*4 - x3*5 == 0) && (x1*1 - x2*2 + x3*1 == -4)){
    
    console.log("x1 = %d",x1);
    console.log("x2 = %d",x2);
    console.log("x3 = %d",x3);
}
