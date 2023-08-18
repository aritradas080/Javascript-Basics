//js BOM
//popup boxes -alert, confirm, prompt


// const addtocart = document.querySelector("#add-to-cart");
// const button = document.querySelector("#add-button");

// button.addEventListener("click", function(){
//     var changeValue = addtocart.textContent;
//     changeValue = changeValue+1;
//     changeValue.innerHTML=changeValue;
//     console.log(changeValue);
// });
function AddItem(){
    const val = confirm("Are you sure you want ot buy more?");
    if(val){
        console.log("item added");
    }else{
        console.log("discard");
    }
}

// deletePicture();