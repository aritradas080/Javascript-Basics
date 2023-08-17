//except
//br, head, title, html, meta, iframe, param, script, style, base, bdo

//onblur, onfocus, onfocusin, onfocusout

const input = document.querySelector("input");
console.log(input);
input.addEventListener("blur", function(e){
    console.log(e);
    console.log("blur is occured");
    input.style.backgroundColor = "transparent"
    input.value = e.target.value.toUpperCase();
    
});

input.addEventListener("focus", function(e){
    console.log("focus is occured");
    input.style.backgroundColor = "orange"; 
    input.value = e.target.value.toLowerCase(); 
});

// input.addEventListener("focusin", function(){
//     console.log("focusin is occured");
// });

// input.addEventListener("focusout", function(){
//     console.log("focusout is occured");
// });