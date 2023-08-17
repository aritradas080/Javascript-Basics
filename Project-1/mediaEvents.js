const video = document.querySelector("video");

video.addEventListener("canplay", function(){
    console.log("can play");
});

video.addEventListener("play", function(){
    console.log("play");
});

video.addEventListener("pause", function(){
    console.log("pause");
});

video.addEventListener("ended", function(){
    console.log("thanks for watching");
});

window.addEventListener("resize",function(){
    console.log("resize");
    const h = window.outerHeight;
    const w = window.outerWidth;
    console.log('Height :'+ h + 'and'+ 'Width :'+ w);
    
});