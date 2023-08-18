var saveButton = document.querySelector(".save-btn");
var para = document.querySelector(".count");
saveButton.addEventListener("click", startClock);

function startClock(){
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    let time = hours + ":" + minutes + ":" + seconds;
    para.textContent = time;

    setInterval(startClock,1000);
}

function formatTime(value){
    if (value<10){
        value = "0"+ value;
    }
    return value;
}

