var images = ["Project-images/Doraemon.png","Project-images/goku.jpg","Project-images/Tom.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function prev(){
    count--;
    if(count<0){
        count=images.length-1;
    }
    imgTag.src=images[count];

}

function next(){
    count++;
    if(count>=images.length){
        count=0;
    }
    imgTag.src=images[count];
}