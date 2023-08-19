//object literals
function Student(name,age){
    return {
        name,
        age
    }
}

console.log(Student("ABD",30));

let newObject = {
    body : function(){
        return "Hi this is object function";
    }
}

console.log(newObject.body());

//concise style
let message = {
    'body mes' (){
        return "I am concise method";
    }
}

console.log(message['body mes']());