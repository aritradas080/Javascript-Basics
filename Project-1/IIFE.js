//syntax of Immediately Invokable Function Expressions
(function newFunction(a,b){
    document.write(a+b);
})(2,5);

var functionone = function newFunction(msg){
    document.write(msg);
}
functionone("Hello, I am learning javascript");