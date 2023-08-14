var heading3 = document.createElement("h1");
var text = document.createTextNode("This is third heading");
heading3.appendChild(text);

var root = document.getElementById("my-div")
root.appendChild(heading3);