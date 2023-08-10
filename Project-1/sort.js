var numbers = [20, 3,8,6,100, 32]
numbers.sort(function(a,b){
    return b-a;
});

for(var i=0; i<numbers.length; i++){
    document.write(numbers[i]);
    document.write(" ");
}