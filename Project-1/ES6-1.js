//let keyword will work as a scope
//const value can't be changed
let x = 30;
let y = 20;
let sum = x + y;

console.log(`sum is ${sum} the end`);

//function declaration


//es6 expression
const addition = (p,q) => {
    let add = p+q;
    console.log(add);
}

addition(60,60);

//hoisting mode means when a variable can be used before declaration ---> for var keyword
//for 'let' and 'const' it won't be possible
//hoistiung mode is a default behaviour of js
//"use strict"-->for strict mode

//default parameter
// function printLine(text="This is default parameter"){
//     console.log(`${text}`);
// }

// printLine();
// printLine("NO this is not a default parameter");

//rest parameter

function display(x,y, ...z){
    console.log(`x : ${x}, y : ${y}, z : ${z} `);
}

display(10,20,30,40,50);