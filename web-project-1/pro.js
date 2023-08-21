const slideshowElements = document.querySelectorAll(".slideshow-element");
console.log(slideshowElements);
let count = 1;
let clickcount = 0; 

var slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("click", function(){
clickcount++;
if(clickcount==1){
    setInterval(()=> {
        count++;
         let currentElement = document.querySelector(".current");
    
       
        currentElement.classList.remove("current");
       
    
        if(count>slideshowElements.length){
            slideshowElements[0].classList.add("current");
            count=1;
         }else{
            currentElement.nextElementSibling.classList.add("current");
         }
    },1000);
}
else if(clickcount>1){
    //slideshowElements[0].classList.add("current");
    clickcount=0;
}
});



