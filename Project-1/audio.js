var audio = null; // Declare audio outside the event listeners

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".mybutton")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    playAudio(text);
    playAnimation(text);
});

}

function playAudio(text){
    if (audio) {
        audio.pause(); // Pause the currently playing audio (if any)
      }
    switch (text) {
        case "Levitating by Dua Lipa":
          audio = new Audio("Sounds/Levitating.mp3");
          audio.play();
          break;
        case "Happier by Olivia Rodrigo":
          audio = new Audio("Sounds/happier.mp3");
          audio.play();
          break;
        case "Perfect by Ed Sheran":
          audio = new Audio("Sounds/perfect.mp3");
          audio.play();
          break;
        case "Stop":
          // No need to create a new audio object for stopping
          if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset the playback position to the beginning
          }
          break;
        default:
          break;
    }
}

function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}

