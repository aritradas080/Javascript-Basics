
for(var x=0; x<3; x++){
    document.querySelectorAll(".buttons")[x].addEventListener("click",function(){
     
            var textElements = this.innerHTML;
            var tagprev = document.querySelector("h1");
            tagprev.innerHTML = textElements + " is clicked";
            
    });
}
