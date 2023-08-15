var myvar=document.querySelector("#headingID");

myvar.addEventListener("mouseover", function(){

    myvar.classList.add("heading");
});

myvar.addEventListener("mouseout", function(){
    myvar.classList.remove("heading");
});