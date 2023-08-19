//spread operator
function addNumbers(x,y,z){
    return x+y+z;
}

let numbers = [1,2,3];
let numbersMore = [40,50,60,...numbers]; 

console.log(addNumbers(...numbers));
console.log(numbersMore);

//object concatenation with spread operator
let p1={
    name : "ABC",
    age : 23
}

let p2={
    uni : "AIUB",
    cgpa : 3.99
}

let p = {...p1,...p2}
console.log(p);