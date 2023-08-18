//if user clicks yes then the value will be delivered 

function welcome(){
    var h1 = document.createElement("h1");
    var text;
    var name = prompt("Enter your name : ");
    if(name == null || name == ""){
        text = "no name found";
    }else{
        var hello = "Hello";
        text = name;
        text = hello + " " + text;
    }
    
    var textnode = document.createTextNode(text);
    h1.appendChild(textnode);
    document.body.appendChild(h1);
}

welcome();