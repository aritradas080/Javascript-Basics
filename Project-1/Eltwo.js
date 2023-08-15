var myvar1 = document.querySelector("#buttonOne");
var myvar2 = document.querySelector("#buttonTwo");
var myvar3 = document.querySelector("#buttonThree");
var myheading = document.querySelector("#heading");

var count1=0;
var count2=0;
var count3=0;


//for first button

myvar1.addEventListener("click", function(){
    count1++;
    if(count1==1){
        myheading.classList.add("first-style");
    }
    else if(count1==2){
        myheading.classList.remove("first-style");
        count1=0; 
    }
    
});

//for second button

myvar2.addEventListener("click", function(){
    count2++;
    if(count2==1){
        myheading.classList.add("second-style");
    }
    else if(count2==2){
        myheading.classList.remove("second-style");
        count2=0;
    }
    
});

//for third button

myvar3.addEventListener("click", function(){
    count3++;
    if(count3==1){
        myheading.classList.add("third-style");
    }
    else if(count3==2){
        myheading.classList.remove("third-style");
        count3=0;
    }   
});

