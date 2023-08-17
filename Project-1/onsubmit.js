const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const pass = form.querySelector("div #password");

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    
    console.log(name.value);
    console.log(email.value);
    console.log(pass.value);
}