//js bom
// timing events
//setTimeout()--> no repeatation, setInterval()--> repeatations

// setTimeout(()=>{
//     console.log("hi");
// },2000);



// function display(){
//     console.log("hi");
// }

// for(var x=1; x<=10; x++){
//     console.log(setTimeout(display, 2000));
// }

var saveButton = document.querySelector(".save-btn");
var message = document.querySelector(".message-para");
var counting = document.querySelector(".count");
saveButton.addEventListener("click", function(){
    message.textContent = "user added successfully";
    setTimeout(()=>{
        message.textContent = "";
    },2000);
});

saveButton.addEventListener("click", displayCount);
function displayCount(){
    let count=1;
    counting.textContent = count;
    setInterval(() => {
    count++;
    counting.textContent = count; 
    }, 1000);

}