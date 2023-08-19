var a = [2,3,4,5,6];
var b = a.map(function(x){
return x*x;
}) 

b.forEach(function(x){
    console.log(x);
})

//map returns an array 