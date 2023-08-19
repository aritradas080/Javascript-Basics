a = [21,1,2,1,3,22,43,4,5,12]
b = a.filter(function(x){
    if(x<=5){
        return x;
    }
})

b.forEach(function(x){
    console.log(x);
})