//for of loop
const names = ['s1', 's2', 's3'];
for(let name of names){
    console.log(name);
}

//for in is used for object iteration
let student = {
    ID : 101,
    Name : "ABC",
    cgpa : 3.91
}

for(let x in student){
    console.log(student[x]);
}


//forEach loop
const nums = [10,20,30,40,50];
nums.forEach(function(x){
    console.log(x);
})

let squares = [];
nums.forEach(function(x){
    squares.push(x*x);
})

squares.forEach(function(i){
    console.log(i);
})

nums.forEach(function(x,index,array){
    array[index]=x+5;
})

nums.forEach(function(x){
    console.log(x);
})