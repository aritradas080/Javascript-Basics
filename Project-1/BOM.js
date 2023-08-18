console.log(location.href);
//'http://127.0.0.1:5500/Javascript-Basics/Project-1/BOM.html'
//http-->protocol
//127.0.0.1--> host
//5500--> port
///Javascript-Basics/Project-1/BOM.html--> path

// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

var locationDiv = document.querySelector(".location-div");
var p0 = locationDiv.children[0];
var p1 = locationDiv.children[1];
var p2 = locationDiv.children[2];
var p3 = locationDiv.children[3];
var p4 = locationDiv.children[4];

p0.textContent = location.href;
p1.textContent = location.protocol;
p2.textContent = location.hostname;
p3.textContent = location.port;
p4.textContent = location.pathname;

var visitButton = document.querySelector("#visit-button");
visitButton.addEventListener("click", function(){
    location.assign("https://gilded-marzipan-1f086f.netlify.app/#contact");
})