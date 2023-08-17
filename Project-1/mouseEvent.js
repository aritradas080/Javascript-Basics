//mouse event don't work with
//<head>, <html>, <meta>, <title>, <br>, <style>
//<script>, <iframe>, <param>, <base>, <bdo>
//1. onclick
//2. ondblclick
//3. onmousedown
//4. onmousedup
//5. onmouseenter
//6. onmouseleave
//7. onmousemove
//8. onmouseover

const selectdiv = document.querySelector("div");

selectdiv.addEventListener("click", function(){
console.log("clicked once");
});

// selectdiv.addEventListener("dblclick", function(){
// console.log("double clicked once");
// });

// selectdiv.addEventListener("mousedown", function(){
// console.log("mouse clicked");
// });

// selectdiv.addEventListener("mouseup", function(){
// console.log("mouse left unclicked");
// });

// selectdiv.addEventListener("mouseenter", function(){
// console.log("mouse entered");
// });

// selectdiv.addEventListener("mouseleave", function(){
// console.log("mouse left");
// });

// selectdiv.addEventListener("mousemove", function(){
// console.log("mouse moved");
// });

// selectdiv.addEventListener("mouseover", function(){
// console.log("mouse over");
// });

const buttons = document.querySelectorAll(".btn");
Array.from(buttons).map((button)=>{
    button.addEventListener("click", function(){
        console.log("clicked");
    });
});